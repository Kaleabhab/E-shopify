// authSlice.js placeholder
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Example async thunk to login user (simulate API)
export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
  // Here you would call your API and return user data
  return { id: 1, name: 'John Doe', email };
});

// Example async thunk to register user
export const registerUser = createAsyncThunk('auth/registerUser', async ({ name, email, password }) => {
  // API call to register user
  return { id: 2, name, email };
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, loading: false, error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
