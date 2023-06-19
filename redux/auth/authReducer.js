import { createSlice } from "@reduxjs/toolkit";

const stateStart = {
  userId: null,
  login: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: stateStart,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      login: payload.login,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: (state, { payload }) => ({ stateStart }),
  },
});
