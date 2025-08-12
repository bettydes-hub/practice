import { configureStore } from '@reduxjs/toolkit';
import userStatusReducer from './userStatusSlice.js';

export const store = configureStore({
  reducer: {
    userStatus: userStatusReducer,
  },
});
