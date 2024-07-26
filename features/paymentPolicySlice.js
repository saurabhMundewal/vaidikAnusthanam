// src/features/policies/paymentPolicySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchPaymentPolicy = createAsyncThunk('paymentPolicy/fetchPaymentPolicy', async () => {
  const response = await axiosInstance.post(`/Setting/Pages/payment-policy`);
  return JSON.parse(response?.data?.datas);
});

const paymentPolicySlice = createSlice({
  name: 'paymentPolicy',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaymentPolicy.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPaymentPolicy.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPaymentPolicy.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default paymentPolicySlice.reducer;
