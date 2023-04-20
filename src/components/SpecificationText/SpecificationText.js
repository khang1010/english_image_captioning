import React from 'react';

import {Text, View} from 'react-native';

import styles from './SpecificationTextStyle';

const SpecificationText = ({style, header, content}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.number}>{header}</Text>
      <Text style={styles.description}>{content}</Text>
    </View>
  );
};

export default SpecificationText;
