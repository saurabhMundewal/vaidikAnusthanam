import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

// Async thunk to fetch general configuration
export const fetchGeneralConfiguration = createAsyncThunk(
  'generalConfiguration/fetchGeneralConfiguration',
  async () => {
    const response = await axiosInstance.post(`/Setting/GetGeneralConfiguration`);
    localStorage.setItem('generalConfiguration', response?.data?.datas);
    return JSON.parse(response?.data?.datas);
  }
);

const generalConfigurationSlice = createSlice({
  name: 'generalConfiguration',
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
      .addCase(fetchGeneralConfiguration.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGeneralConfiguration.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchGeneralConfiguration.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default generalConfigurationSlice.reducer;
