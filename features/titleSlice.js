import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  titles: {
    '/': 'Home Page',
    '/about': 'About Us',
    '/contact': 'Contact Us',
    // Add more URL-to-title mappings as needed
  },
};

const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {},
});

export const selectTitle = (state, pathname) => state.title.titles[pathname] || 'Default Title';

export default titleSlice.reducer;
