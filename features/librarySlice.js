import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

// Define the initial state
const initialState = {
  categories: [],
  categoryDetails: {},
  categoryList: [],
  loading: false,
  error: null,
};

// Define async thunks for API calls
export const fetchLibraryCategories = createAsyncThunk(
  'library/fetchLibraryCategories',
  async () => {
    const response = await axiosInstance.post(`/Library/LibraryCategory`);
  return JSON.parse(response?.data?.datas);
  }
);

export const fetchLibrarylistDetails = createAsyncThunk(
    'library/fetchLibrarylistDetails',
    async (liblistSlug) => {
      const apiUrl = liblistSlug ? `/Library/LibraryList/${liblistSlug}` : `/Library/LibraryList`
      const response = await axiosInstance.post(apiUrl);   
      return JSON.parse(response?.data?.datas);
    }
  );

export const fetchLibraryCategoryDetails = createAsyncThunk(
  'library/fetchLibraryCategoryDetails',
  async (categoryId) => {
    const response = await axiosInstance.post(`/Library/LibraryList/${libcategorySlug}`);
    return JSON.parse(response?.data?.datas);
  }
);

// Create the slice
const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLibraryCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLibraryCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchLibraryCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchLibraryCategoryDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLibraryCategoryDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryDetails = action.payload;
      })
      .addCase(fetchLibraryCategoryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchLibrarylistDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLibrarylistDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryList = action.payload;
      })
      .addCase(fetchLibrarylistDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default librarySlice.reducer;
