// src/features/faq/faqSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';
import axios from 'axios';

// Define the thunk for fetching FAQs with headers
export const fetchFaq = createAsyncThunk('faq/fetchFaq', async () => {
   const response = await axiosInstance.post(`/Setting/Faqs`);
    return JSON.parse(response?.data?.datas);
  });

const faqSlice = createSlice({
  name: 'faq',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaq.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFaq.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFaq.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default faqSlice.reducer;
