// redux/slices/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false, // default: light mode
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload; // expects true or false
    },
  },
});

export const { toggleTheme, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
