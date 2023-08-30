import React from 'react';

import {StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SCREEN_NAMES from '../constants/screens';

import COLORS from '../constants/colors';
import FONT_FAMILY from '../constants/fonts';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PredictionScreen from '../screens/PredictionScreen/PredictionScreen';
import AboutAppScreen from '../screens/AboutAppScreen/AboutAppScreen';
import StatisticsScreen from '../screens/StatisticScreen/StatisticScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName= {SCREEN_NAMES.HOME_SCREEN} screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={SCREEN_NAMES.HOME_SCREEN}
            component={HomeScreen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.PREDICTION_SCREEN}
            component={PredictionScreen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ABOUT_SCREEN}
            component={AboutAppScreen}/>
          <Stack.Screen
            name={SCREEN_NAMES.STATISTICS_SCREEN}
            component={StatisticsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    fontFamily: FONT_FAMILY.POPPINS['Poppins-Medium'],
  },
});

export default RootNavigator;
