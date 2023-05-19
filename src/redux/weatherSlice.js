// weatherSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  forecastData: null,
  currentData: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setforecastData(state, action) {
      state.forecastData = action.payload;
    },
    setcurrentData(state, action) {
      state.currentData = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) { 
      state.loading = action.payload;
    },
  },
});

export const { setforecastData, setError, setLoading, setcurrentData } = weatherSlice.actions;
export default weatherSlice.reducer;
