import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './RoundedButtonStyles';

const RoundedButton = ({onPress, icon, text, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        {icon ? <View style={[styles.button, style]}>{icon}</View> : null}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundedButton;
