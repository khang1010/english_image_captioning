import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './HeaderStyles';

const Header = ({style, icon, text}) => (
  <View style={style}>
    <Image source={icon} />
    <Text>{text}</Text>
  </View>
);

export default Header;
