import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

// Async thunk to fetch about page data
export const fetchAboutPageData = createAsyncThunk(
  'aboutPage/fetchAboutPageData',
  async () => {
    const response = await axiosInstance.post(`/Setting/AboutPageData`);
    return JSON.parse(response?.data?.datas);
  }
);

const aboutPageSlice = createSlice({
  name: 'aboutPage',
  initialState: {
    data: {},
    status: 'idle',
    error: null
  },
  reducers: {
    // Add reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutPageData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAboutPageData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAboutPageData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default aboutPageSlice.reducer;
