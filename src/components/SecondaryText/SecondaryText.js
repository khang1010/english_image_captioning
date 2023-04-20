import React from 'react';
import {Text, View} from 'react-native';

import styles from './SecondaryTextStyles';

const SecondaryText = props => {
  const {style, children} = props;

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default SecondaryText;
