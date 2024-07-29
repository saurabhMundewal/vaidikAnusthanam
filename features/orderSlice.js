import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

// Thunks for async actions
export const getOrderList = createAsyncThunk('orders/getOrderList', async ( member_id, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/Orders/getOrderList', { member_id });
    return JSON.parse(response?.data?.datas);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const getOrderDetails = createAsyncThunk('orders/getOrderDetails', async ({ member_id, order_index }, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/Orders/getOrderDetails', { member_id, order_index });
    return JSON.parse(response?.data?.datas);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderList: [],
    orderDetails: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrderList.fulfilled, (state, action) => {
        state.loading = false;
        state.orderList = action.payload;
      })
      .addCase(getOrderList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOrderDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetails = action.payload;
      })
      .addCase(getOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
