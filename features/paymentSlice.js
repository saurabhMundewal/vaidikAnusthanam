// redux/slices/bookingSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';// Adjust the import path as necessary

// Define initial state
const initialState = {
  booking: null,
  status: 'idle',
  error: null,
};

// Create async thunk for API call
export const submitBookingPayment = createAsyncThunk(
  'booking/submitBookingPayment',
  async (bookingData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/Pujas/submitBookingpayment/', bookingData);
      return JSON.parse(response?.data?.datas);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create slice
const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitBookingPayment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitBookingPayment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.booking = action.payload;
      })
      .addCase(submitBookingPayment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default bookingSlice.reducer;
