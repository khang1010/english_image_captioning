import React, {useLayoutEffect, useRef, useState} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';

import {useSelector} from 'react-redux';

import {
  fileSelector,
  predictionResultSelector,
  selectStatus,
} from '../../features/prediction/predictionSlice';

import {SVG_SCAN} from '../../assets/images';
import RoundedButton from '../../components/RoundedButton/RoundedButton';

import SCREEN_NAMES from '../../constants/screens';
import styles from './PredictionScreenStyles';
import TypingText from 'react-native-typing-text';

const PredictionScreen = ({navigation}) => {
  const fileData = useSelector(fileSelector);

  const predictionResults = useSelector(predictionResultSelector);
  const predictionStatus = useSelector(selectStatus);

  const [scrollOffsetY, setScrollOffsetY] = useState(0);
  const [imageSize, setImageSize] = useState(null);
  const [verbIndex, setVerbIndex] = useState(-1);

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
            predictionResults?.map?.((caption, index) => (
              // <Text key={index} style={{color: 'black'}}>
              //   {caption}
              // </Text>
              <TypingText text={caption} style={{color: 'black'}} />
            ))
          ) : (
            <Text style={styles.verb}>Loading</Text>
          )}

          <View style={styles.buttonGroup}>
            <RoundedButton
              onPress={() => navigation.navigate(SCREEN_NAMES.HOME_SCREEN)}
              icon={<SVG_SCAN width={40} height={40} />}
              text="Scan"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PredictionScreen;
