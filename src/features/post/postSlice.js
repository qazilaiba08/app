import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Utils/api"; 

// 🔹 Fetch all posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/posts");
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Error fetching posts");
  }
});

// 🔹 Create a post
export const createPost = createAsyncThunk("posts/createPost", async (postData, thunkAPI) => {
  try {
    const res = await axios.post("/posts", postData);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Error creating post");
  }
});

// 🔹 Like a post
export const likePost = createAsyncThunk("posts/likePost", async (postId, thunkAPI) => {
  try {
    const res = await axios.put(`/posts/${postId}/like`);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Error liking post");
  }
});

// 🔹 Delete a post
export const deletePost = createAsyncThunk("posts/deletePost", async (postId, thunkAPI) => {
  try {
    await axios.delete(`/posts/${postId}`);
    return postId;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Error deleting post");
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch posts
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create post
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })

      // Like post
      .addCase(likePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((p) => p._id === action.payload._id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })

      // Delete post
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((p) => p._id !== action.payload);
      });
  },
});

export default postSlice.reducer;
