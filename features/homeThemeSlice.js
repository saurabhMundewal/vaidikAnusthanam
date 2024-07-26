// redux/slices/homeThemeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';


// Define the async thunk for fetching home theme content
export const fetchHomeThemeContent = createAsyncThunk(
  'homeTheme/fetchHomeThemeContent',
  async () => {
    const response = await axiosInstance.post(`/Setting/GetHomeThemeContent`);
    return JSON.parse(response?.data?.datas);
  }
);

const homeThemeSlice = createSlice({
  name: 'homeTheme',
  initialState: {
    content: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeThemeContent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHomeThemeContent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.content = action.payload;
      })
      .addCase(fetchHomeThemeContent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default homeThemeSlice.reducer;
