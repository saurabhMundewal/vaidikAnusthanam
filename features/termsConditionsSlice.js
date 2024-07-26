// src/features/policies/termsConditionsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchTermsConditions = createAsyncThunk('termsConditions/fetchTermsConditions', async () => {
  const response = await axiosInstance.post(`/Setting/Pages/terms-conditions`);
  return JSON.parse(response?.data?.datas);
});

const termsConditionsSlice = createSlice({
  name: 'termsConditions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTermsConditions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTermsConditions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTermsConditions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default termsConditionsSlice.reducer;
