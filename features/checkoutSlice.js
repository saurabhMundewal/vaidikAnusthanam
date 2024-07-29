import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

// Define an initial state
const initialState = {
  status: 'idle',
  error: null,
};

// Create an async thunk for submitting the booking form
export const submitBookingForm = createAsyncThunk(
  'booking/submitBookingForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/Pujas/submitBookingFormCheckout/', formData);
      return JSON.parse(response?.data?.datas);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Create the slice
const checkoutSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitBookingForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitBookingForm.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(submitBookingForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default checkoutSlice.reducer;
