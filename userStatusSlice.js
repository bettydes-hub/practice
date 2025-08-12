import { createSlice } from '@reduxjs/toolkit';

const userStatusSlice = createSlice({
  name: 'userStatus',
  initialState: {},
  reducers: {
    toggleStatus: (state, action) => {
      const userId = action.payload;
      state[userId] = !state[userId];
    },
  },
});

export const { toggleStatus } = userStatusSlice.actions;
export default userStatusSlice.reducer;
