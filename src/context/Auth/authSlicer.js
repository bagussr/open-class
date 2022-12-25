import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  key: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.key = null;
    },
    login: (state, action) => {
      state.key = action.payload;
    },
  },
});

export const { logout, login } = authSlice.actions;

export const selectAuth = state => state.auth;

export default authSlice.reducer;
