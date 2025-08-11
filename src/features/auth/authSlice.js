import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../Utils/api";

export const loginUser = createAsyncThunk("auth/login", async (formData, thunkAPI) => {
  try {
    const { data } = await API.post("/auth/login", formData);
    localStorage.setItem("token", data.token);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Login failed");
  }
});

export const signupUser = createAsyncThunk("auth/signup", async (formData, thunkAPI) => {
  try {
    const { data } = await API.post("/auth/register", formData);
    localStorage.setItem("token", data.token);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Signup failed");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => { state.loading = true; })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false; state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false; state.error = action.payload;
      })
      .addCase(signupUser.pending, (state) => { state.loading = true; })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false; state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false; state.error = action.payload;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
