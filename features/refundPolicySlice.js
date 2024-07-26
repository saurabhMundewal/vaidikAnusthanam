// src/features/policies/refundPolicySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchRefundPolicy = createAsyncThunk('refundPolicy/fetchRefundPolicy', async () => {
  const response = await axiosInstance.post(`/Setting/Pages/refund-policy`);
  return JSON.parse(response?.data?.datas);
  
});

const refundPolicySlice = createSlice({
  name: 'refundPolicy',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRefundPolicy.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRefundPolicy.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRefundPolicy.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default refundPolicySlice.reducer;
