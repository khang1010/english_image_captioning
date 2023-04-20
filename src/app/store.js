import {configureStore} from '@reduxjs/toolkit';
import algorithmSlice from '../features/algorithm/algorithmSlice';
import predictionReducer from '../features/prediction/predictionSlice';

export default configureStore({
  reducer: {
    prediction: predictionReducer,
    algorithm: algorithmSlice,
  },
});
