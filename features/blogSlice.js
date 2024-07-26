import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

// Thunks
export const fetchPosts = createAsyncThunk('blog/fetchPosts', async () => {
    const response = await axiosInstance.post(`/Blogs/blogList`);
    return JSON.parse(response?.data?.datas);
});

export const addPost = createAsyncThunk('blog/addPost', async (newPost) => {
  const response = await axios.post('/Blogs/blogCategoryList', newPost);
  return response.data;
});

// Slice
const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export default blogSlice.reducer;
