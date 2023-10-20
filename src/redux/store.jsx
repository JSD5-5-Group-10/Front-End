import { createSlice, configureStore } from "@reduxjs/toolkit";
import React, { useEffect } from "react";

const authSlice = createSlice({
  // นี่คือ State
  name: "auth",
  initialState: {
    isLogin: false,
  },
  reducers: {
    login(state) {
      state.isLogin = true;
      setTimeout(() => {
        localStorage.clear();
      }, 1000*60*60);
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});
export const authActions = authSlice.actions;

//////////////////////////////////////////////
export const store = configureStore({
  reducer: authSlice.reducer,
});
