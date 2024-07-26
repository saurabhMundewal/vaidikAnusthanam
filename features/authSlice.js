import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';
import Cookies from 'js-cookie';

const initialState = {
    user: null,
    token: Cookies.get('token') || null,
    status: 'idle',
    error: null,
  };

// Async thunks for API calls
export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axiosInstance.post('/Users/SignIn', credentials);
  const userInfo = JSON.parse(response?.data?.datas)
  Cookies.set('id', userInfo?.user_id, { expires: 7 });
  Cookies.set('user_type', userInfo?.user_type, { expires: 7 });
  return userInfo;
});

export const signup = createAsyncThunk('auth/signup', async (userData) => {
  const response = await axiosInstance.post('/Users/registration', userData);
  Cookies.set('token', response.data.token, { expires: 7 });
  return response.data;
});

export const changePassword = createAsyncThunk('auth/changePassword', async (passwordData) => {
  const response = await axiosInstance.post('/Users/change_password', passwordData);
  return response.data;
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (email) => {
  const response = await axios.post('/Users/forgotPassword', { email });
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(changePassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
