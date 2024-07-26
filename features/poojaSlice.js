import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

// Thunks
export const fetchPuja = createAsyncThunk('puja/fetchPuja', async () => {
    const response = await axiosInstance.post(`/Pujas/pujaList/all`);
    return JSON.parse(response?.data?.datas);
});

export const addPost = createAsyncThunk('blog/addPost', async (newPost) => {
  const response = await axios.post('/Blogs/blogCategoryList', newPost);
  return response.data;
});

// Slice
const blogSlice = createSlice({
  name: 'puja',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPuja.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPuja.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.puja = action.payload;
      })
      .addCase(fetchPuja.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export default blogSlice.reducer;
