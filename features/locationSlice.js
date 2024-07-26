import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

// Async thunks for fetching data from APIs
export const fetchCountries = createAsyncThunk(
  'location/fetchCountries',
  async () => {
    const response = await axiosInstance.post('Users/getCountry');
     return JSON.parse(response?.data?.datas);
  }
);

export const fetchStates = createAsyncThunk(
  'location/fetchStates',
  async (countryId) => {
    const response = await axiosInstance.post(`/Users/getStates/${countryId}`);
     return JSON.parse(response?.data?.datas);
  }
);

export const fetchCities = createAsyncThunk(
  'location/fetchCities',
  async (stateId) => {
    const response =  await axiosInstance.post(`/Users/getCities/${stateId}`);
     return JSON.parse(response?.data?.datas);
  }
);

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    countries: [],
    states: [],
    cities: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchStates.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStates.fulfilled, (state, action) => {
        state.loading = false;
        state.states = action.payload;
      })
      .addCase(fetchStates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default locationSlice.reducer;
