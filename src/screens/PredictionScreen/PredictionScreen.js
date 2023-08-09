import React, {useLayoutEffect, useRef, useState, useEffect} from 'react';
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

import {SVG_LOUDSPEAKER, SVG_SCAN} from '../../assets/images';
import RoundedButton from '../../components/RoundedButton/RoundedButton';

import SCREEN_NAMES from '../../constants/screens';
import styles from './PredictionScreenStyles';
import TypingText from 'react-native-typing-text';
import Tts from 'react-native-tts';

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

  const initialContentOffset = imageSize
    ? Dimensions.get('window').height -
      (Dimensions.get('window').width * imageSize.height) / imageSize.width
    : 0;

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
          {predictionStatus === 'succeeded' ? (
            predictionResults?.map?.((caption, index) =>
              // <Text key={index} style={{color: 'black'}}>
              //   {caption}
              // </Text>
              {
                // setText(caption);
                return <TypingText text={caption} style={{color: 'black'}} />;
                // return (<Text key={index} style={{color: 'black'}}>{text}</Text>);
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PredictionScreen;
