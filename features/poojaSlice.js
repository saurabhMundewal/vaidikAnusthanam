import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../lib/axiosInstance';

// Thunks
export const fetchPuja = createAsyncThunk('puja/fetchPuja', async () => {
    const response = await axiosInstance.post(`/Pujas/pujaList/all`);
    return JSON.parse(response?.data?.datas);
});

export const fetchSelectedPuja = createAsyncThunk('puja/fetchSelectedPuja', async (slug) => {
    const response = await axiosInstance.post(`/Pujas/pujaDetails/${slug}`);
    sessionStorage.setItem('selected_pooja', response?.data?.datas);
    return JSON.parse(response?.data?.datas);
});

export const addPost = createAsyncThunk('blog/addPost', async (newPost) => {
    const response = await axiosInstance.post('/Blogs/blogCategoryList', newPost);
    return response.data;
});

// Slice
const poojaSlice = createSlice({
    name: 'puja',
    initialState: {
        puja: [],
        selectedPuja: null,
        selectedPackage: null,
        posts: [],
        status: 'idle',
        selectedPujaStatus: 'idle',
        error: null,
    },
    reducers: {
        setSelectedPackageId: (state, action) => {
            state.selectedPackage = action.payload;
        },
    },
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
            .addCase(fetchSelectedPuja.pending, (state) => {
                state.selectedPujaStatus = 'loading';
            })
            .addCase(fetchSelectedPuja.fulfilled, (state, action) => {
                state.selectedPujaStatus = 'succeeded';
                state.selectedPuja = action.payload;
            })
            .addCase(fetchSelectedPuja.rejected, (state, action) => {
                state.selectedPujaStatus = 'failed';
                state.error = action.error.message;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            });
    },
});

export const { setSelectedPackageId } = poojaSlice.actions;
export default poojaSlice.reducer;
