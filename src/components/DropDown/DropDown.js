import React, {useEffect, useRef, useState} from 'react';

import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import COLORS from '../../constants/colors';

import styles from './DropDownStyles';

const DropDown = ({
  style,
  titleStyle,
  title,
  items,
  defaultValue,
  value,
  onChoose,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [tab, setTab] = useState(defaultValue);

  const fadedAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (value) setTab(value);
  }, [value]);

  useEffect(() => {
    Animated.timing(fadedAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadedAnimation, isOpen]);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          setIsOpen(prev => !prev);
        }}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </TouchableOpacity>
      <ScrollView
        nestedScrollEnabled
        style={[
          styles.boxContainer,
          {opacity: isOpen ? 1 : 0},
          {display: isOpen ? 'flex' : 'none'},
        ]}>
        <View style={[styles.box]}>
          {items.map((content, index) => (
            <TouchableOpacity
              onPress={() => {
                setIsOpen(false);
                onChoose?.(content);
              }}
              style={styles.item}
              key={index}>
              <Text
                style={[
                  styles.itemText,
                  {color: content == tab ? COLORS.BLACK : COLORS.GRAY},
                ]}>
                {content}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DropDown;
