import React from 'react';
import {Text, View} from 'react-native';

import styles from './ChartItemStyles';

const ChartItem = ({backgroundColor, color, style, title, percent}) => (
  <View style={[{backgroundColor}, style]}>
    <Text style={{color}}>{title}</Text>
    <View></View>
  </View>
);

export default ChartItem;
