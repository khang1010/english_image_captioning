import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import predict from '../../api/predict';

export const fetchResults = createAsyncThunk(
  'prediction/fetchResults',
  async ({data, type}) => {
      const res = await predict({data, type});
      return res;
  },
);

export const predictionSlice = createSlice({
  name: 'prediction',
  initialState: {
    file: null,
    status: 'idle',
    error: null,
    predictionResults: [],
  },
  reducers: {
    changeFile: (state, action) => {
      state.file = action.payload;
    },
    updateResult: (state, action) => {
      state.predictionResults = action.payload;
    },
  },
  extraReducers: builder => {
    
    builder
      .addCase(fetchResults.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.predictionResults = action.payload;
      })
      .addCase(fetchResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {updateResult, changeFile} = predictionSlice.actions;

// export const predictionResultSelector = state =>
//   state.prediction.predictionResults.filter(
//     data => data?.score && data.score > 0.05,
//   );
export const predictionResultSelector = state =>
  state.prediction.predictionResults?.slice?.(0, 5) || [];
export const selectStatus = state => state.prediction.status;
export const fileSelector = state => state.prediction.file;

export default predictionSlice.reducer;
