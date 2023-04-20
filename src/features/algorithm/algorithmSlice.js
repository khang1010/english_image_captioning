import {createSlice} from '@reduxjs/toolkit';

export const algorithmSlice = createSlice({
  name: 'algorithm',
  initialState: {
    type: 'Default',
  },
  reducers: {
    changeAlgorithm: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const {changeAlgorithm} = algorithmSlice.actions;

export const algorithmTypeSelector = state => state.algorithm.type;

export default algorithmSlice.reducer;
