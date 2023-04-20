import {useState, useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorageState = (stateName, defaultValue) => {
  const asyncStorageData = JSON.parse(AsyncStorage.getItem(stateName));
  const [data, setData] = useState(asyncStorageData || defaultValue);

  useEffect(() => {
    AsyncStorage.setItem(stateName, JSON.stringify(data));
  }, [data, stateName]);

  return [
    data,
    arg => {
      if (arg instanceof Function) {
        AsyncStorage.setItem(stateName, JSON.stringify(arg.call(null, data)));
      } else {
        AsyncStorage.setItem(stateName, JSON.stringify(arg));
      }
      setData(arg);
    },
  ];
};

export default useAsyncStorageState;
