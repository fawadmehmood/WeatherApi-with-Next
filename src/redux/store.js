// index.js
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import searchHistorySlice from './searchHistorySlice';


const store = configureStore({
  reducer: {
    weather: weatherReducer,
    searchHistory: searchHistorySlice,
  },
});

export default store;
