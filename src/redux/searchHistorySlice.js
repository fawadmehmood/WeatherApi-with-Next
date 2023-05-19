import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  history: [],
 
};

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    addSearch: (state, action) => {
      const newSearch = action.payload;
      if (!state.history.some((search) => search.toLowerCase() === newSearch.toLowerCase())) {
        state.history.push(newSearch);
      }
    },
    clearSearchHistory: (state) => {
      state.history = [];
    },
  },
});



export const selectFilteredSearchHistory = (state, inputValue) => {
  const searchHistory = state.searchHistory.history;
  return searchHistory?.filter((item) => {

    return item.toLowerCase().includes(inputValue.toLowerCase())
  });
};

export const { addSearch, clearSearchHistory } = searchHistorySlice.actions;
export default searchHistorySlice.reducer;


