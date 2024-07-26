// src/features/team/teamSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

// Define the initial state
const initialState = {
  team: [],
  status: 'idle',
  error: null
};

// Define the async thunk for fetching team data
export const fetchTeam = createAsyncThunk('team/fetchTeam', async () => {
    const response = await axiosInstance.post(`/Setting/GetTeam`);
    return JSON.parse(response?.data?.datas);
});

// Create the slice
const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    // Add any synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeam.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTeam.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.team = action.payload;
      })
      .addCase(fetchTeam.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});



// Export the reducer to be included in the store
export default teamSlice.reducer;
