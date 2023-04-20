import React from 'react';
import {View, Text} from 'react-native';

import styles from './PrimaryTextStyles';

const PrimaryText = ({style, children}) => (
  <Text style={[styles.text, style]}>{children}</Text>
);

export default PrimaryText;
