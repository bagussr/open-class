import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authoreized: false,
  key: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.key = null;
      state.authoreized = false;
    },
    login: (state, action) => {
      state.key = action.payload;
      state.authoreized = true;
    },
    settinguser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logout, login, settinguser } = authSlice.actions;

export const selectAuth = state => state.auth;

export default authSlice.reducer;
