// slices/bannersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

const initialState = {
  banners: [],
  loading: false,
  error: null,
};

// Thunk to fetch banners
export const fetchBanners = createAsyncThunk('banners/fetchBanners', async () => {
  const response = await axiosInstance.post(`/Setting/GetBannerNAbout`);
   return JSON.parse(response?.data?.datas);
 });

const bannersSlice = createSlice({
  name: 'banners',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bannersSlice.reducer;
