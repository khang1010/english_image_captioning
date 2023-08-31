import React, {useLayoutEffect, useRef, useState, useEffect, useCallback} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  BackHandler,
} from 'react-native';

import {useSelector} from 'react-redux';

import {
  fileSelector,
  predictionResultSelector,
  selectStatus,
} from '../../features/prediction/predictionSlice';

import {IC_INFO, SVG_INFO, SVG_LOUDSPEAKER, SVG_SCAN, SVG_SHARE} from '../../assets/images';
import RoundedButton from '../../components/RoundedButton/RoundedButton';

import SCREEN_NAMES from '../../constants/screens';
import styles from './PredictionScreenStyles';
import TypingText from 'react-native-typing-text';
import Tts from 'react-native-tts';
import { useRoute } from '@react-navigation/native';
import Share from 'react-native-share';

const PredictionScreen = ({navigation}) => {
  const fileData = useSelector(fileSelector);

  const predictionResults = useSelector(predictionResultSelector);
  const predictionStatus = useSelector(selectStatus);

  const [scrollOffsetY, setScrollOffsetY] = useState(0);
  const [imageSize, setImageSize] = useState(null);
  const [verbIndex, setVerbIndex] = useState(-1);
  const [text, setText] = useState('Khang');

  const imageScrollRef = useRef(null);
  const manBoxScrollRef = useRef(null);

  const route = useRoute();
  const { imageURI } = route.params;

  const initialContentOffset = imageSize
    ? Dimensions.get('window').height -
      (Dimensions.get('window').width * imageSize.height) / imageSize.width
    : 0;

  const handleShare = async (message = "hello") => {
    try {
      const shareOptions = {
        title: "Image Captioning",
        url: imageURI,
        message: message,
      };

      const shareResponse = await Share.open(shareOptions);
      console.log(shareResponse);
    } catch (error) {
      console.log(error);
    }
  }

  const handleShareCallback = useCallback(() => {
    console.log(">>> prediction status: ", predictionStatus);
    if (predictionStatus === 'succeeded') {
      // console.log(">>> result: ", predictionResults);
      predictionResults?.map?.((caption, index) => {
        return handleShare(caption);
      });
    } else {
      handleShare("You don't have caption for this image");
    }
  }, [predictionStatus, predictionResults]);
  
  useLayoutEffect(() => {
    imageScrollRef.current.scrollTo({y: scrollOffsetY, animated: true});
    Image.getSize(fileData, (width, height) => setImageSize({width, height}));
  }, [scrollOffsetY]);

  useEffect(() => {
    const backAction = () => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: SCREEN_NAMES.HOME_SCREEN,
            params: {key: Math.random().toString()},
          },
        ],
      });
      return true;
    };

    // Đăng ký bắt sự kiện nhấn nút "Back"
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    // Hủy đăng ký khi component bị hủy
    return () => backHandler.remove();
  }, []);

  const fullText = 'This is a typing text animation.';
  useEffect(() => {
    let isMounted = true;
    let currentIndex = 0;

    const typingAnimation = setInterval(() => {
      if (isMounted) {
        const currentChar = fullText[currentIndex];
        setText(prevText => prevText + currentChar);
        currentIndex++;

        if (currentIndex === fullText.length) {
          clearInterval(typingAnimation);
        }
      }
    }, 100);

    return () => {
      isMounted = false;
      clearInterval(typingAnimation);
    };
  }, []);

  const handleTextToSpeech = caption => {
    Tts.setDefaultLanguage('en-IE');
    Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compat');
    Tts.speak(caption, {
      androidParams: {
        KEY_PARAM_PAN: -1,
        KEY_PARAM_VOLUME: 1,
        KEY_PARAM_STREAM: 'STREAM_MUSIC',
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView ref={imageScrollRef} nestedScrollEnabled>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.imagePreview}
              resizeMode={'contain'}
              source={{uri: fileData}}
            />
          </View>
          <View style={{height: 1000}}></View>
        </ScrollView>
      </View>
      <ScrollView
        nestedScrollEnabled
        ref={manBoxScrollRef}
        contentOffset={{
          x: 0,
          y: imageSize ? initialContentOffset : 0,
        }}
        onScroll={event => {
          const offsetY = event?.nativeEvent?.contentOffset?.y;
          if (offsetY) {
            if (offsetY < initialContentOffset) {
              manBoxScrollRef.current.scrollTo({
                x: 0,
                y: initialContentOffset,
                animated: true,
              });
            }
            setScrollOffsetY(offsetY / 2);
          }
        }}>
        <View style={styles.mainBox}>
          {
          predictionStatus === 'succeeded' ? (
            predictionResults?.map?.((caption, index) =>
              {
                return <TypingText text={caption} style={{color: 'black'}} />;
              },
            )
          ) : (
            <Text style={styles.verb}>Loading</Text>
          )}
          <View style={styles.buttonGroup}>
            <RoundedButton
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: SCREEN_NAMES.HOME_SCREEN,
                      params: {key: Math.random().toString()},
                    },
                  ],
                })
              }
              icon={<SVG_SCAN width={40} height={40} />}
              text="Scan"
            />
            <RoundedButton
              onPress={() =>
                predictionStatus === 'succeeded'
                  ? predictionResults?.map?.((caption, index) => {
                      return handleTextToSpeech(caption);
                    })
                  : handleTextToSpeech('Nothing')
              }
              icon={<SVG_LOUDSPEAKER width={40} height={40} />}
              text="READ"
              style={{backgroundColor: '#FFFFFF'}}
            />
            <RoundedButton
              onPress={handleShareCallback}
              icon={<SVG_SHARE width={40} height={40} />}
              text="SHARE"
              style={{backgroundColor: '#FFFFFF'}}
            />
          </View>
          <View style={styles.aboutButton}>
            <RoundedButton
                onPress={() =>
                  navigation.navigate(SCREEN_NAMES.ABOUT_SCREEN)
                }
                icon={<SVG_INFO width={40} height={40} />}
                text="About"
                style={{backgroundColor: '#FFFFFF', borderWidth: 0}} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PredictionScreen;
