import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './Auth/authSlicer';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
