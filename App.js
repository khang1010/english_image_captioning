import React from 'react';

import {Provider} from 'react-redux';

import store from './src/app/store';

import RootNavigator from './src/routes/RootNavigator';
import AboutAppScreen from './src/screens/AboutAppScreen/AboutAppScreen';
import StatisticsScreen from './src/screens/StatisticScreen/StatisticScreen';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;