import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { post } from "../Types/types";

const initialState = {
    posts: [] as post[],
    status: "idle",
    error: "null",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
});

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchPosts.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.status = "succeeded";
        })
        .addCase(fetchPosts.rejected, (state, action) => {
                state.error = "error code";
                state.status = "failed";
        })
    }
});

