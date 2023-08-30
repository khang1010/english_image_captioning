import React, {useEffect, useRef} from 'react';
import {PermissionsAndroid, Text, TouchableOpacity, View} from 'react-native';
import DocumentPicker, {isInProgress} from 'react-native-document-picker';

import {useDispatch, useSelector} from 'react-redux';

import {SVG_PENCIL, SVG_PICTURE, SVG_ROUNDED_SCAN} from '../../assets/images';

import AlgorithmChoosing from '../../components/AlgorithmChoosing/AlgorithmChoosing';
import SCREEN_NAMES from '../../constants/screens';

import {
  changeFile,
  fetchResults,
} from '../../features/prediction/predictionSlice';

import {Camera, useCameraDevices} from 'react-native-vision-camera';

import {algorithmTypeSelector} from '../../features/algorithm/algorithmSlice';
import styles from './HomeScreenStyles';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const camera = useRef(null);

  const devices = useCameraDevices();
  const device = devices.back;

  const algorithmType = useSelector(algorithmTypeSelector);

  useEffect(() => {
    (async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log({granted});
    })();
  }, []);

  const handlePickingFileError = async err => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  const handleChoosePicture = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
      });

      console.log({pickerResult});
      const data = {data: pickerResult, type: algorithmType};
      dispatch(fetchResults(data));

      dispatch(changeFile(pickerResult.fileCopyUri));

      navigation.navigate(SCREEN_NAMES.PREDICTION_SCREEN, { imageURI: pickerResult.fileCopyUri });
    } catch (error) {
      handlePickingFileError(error);
    }
  };

  const handleScan = async () => {
    const picture = await camera.current.takePhoto();
    const data = {
      fileName: 'upload.jpg',
      name: 'upload.jpg',
      type: 'image/jpeg',
      uri: `file://${picture.path}`,
    };
    console.log({picture, data});
    const imageURI = 'file://' + picture.path;
    dispatch(fetchResults({data, type: 'none'}));
    dispatch(changeFile(imageURI));
    navigation.navigate(SCREEN_NAMES.PREDICTION_SCREEN, { imageURI: imageURI });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {device && (
          <Camera
            ref={camera}
            style={styles.camera}
            photo={true}
            device={device}
            isActive={true}
          />
        )}
        <View style={[styles.mask, styles.maskTop]}></View>
        <View style={[styles.mask, styles.maskBottom]}></View>
        <View style={[styles.mask, styles.maskLeft]}></View>
        <View style={[styles.mask, styles.maskRight]}></View>
      </View>
      <Text style={styles.instructionText}>English Image Captioning</Text>
      <View style={styles.algorithmBox}>
        {/* <AlgorithmChoosing titleStyle={styles.algorithmButton} /> */}
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={handleChoosePicture}>
          <SVG_PICTURE></SVG_PICTURE>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleScan}>
          <SVG_ROUNDED_SCAN style={styles.scanIcon}></SVG_ROUNDED_SCAN>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
