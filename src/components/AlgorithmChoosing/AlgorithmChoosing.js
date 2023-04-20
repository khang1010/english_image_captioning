import React from 'react';
import {Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {
  changeAlgorithm,
  algorithmTypeSelector,
} from '../../features/algorithm/algorithmSlice';

import DropDown from '../DropDown/DropDown';

import styles from './AlgorithmChoosingStyles';

const AlgorithmChoosing = ({style, ...otherProps}) => {
  const dispatch = useDispatch();
  const algorithmType = useSelector(algorithmTypeSelector);

  return (
    <DropDown
      style={[styles.dropBoxContainer, style]}
      title="Choose another algorithm"
      items={[
        'Default',
        'Raw SVM',
        'Hist SVM',
        'Histogram SVM',
        'Hog SVM',
        'Shitomasi SVM',
        'LBP SVM',
      ]}
      defaultValue={'Default'}
      value={algorithmType}
      onChoose={algorithm => dispatch(changeAlgorithm(algorithm))}
      {...otherProps}
    />
  );
};

export default AlgorithmChoosing;
