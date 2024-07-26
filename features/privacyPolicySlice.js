// src/features/policies/privacyPolicySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchPrivacyPolicy = createAsyncThunk('privacyPolicy/fetchPrivacyPolicy', async () => {
  const response = await axiosInstance.post(`/Setting/Pages/privacy-policy`);
  return JSON.parse(response?.data?.datas);
});

const privacyPolicySlice = createSlice({
  name: 'privacyPolicy',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrivacyPolicy.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPrivacyPolicy.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPrivacyPolicy.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default privacyPolicySlice.reducer;
