// appStore.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";  // Import the userReducer

const appStore = configureStore({
  reducer: {
    user: userReducer,  // Add user reducer here
  },
});

export default appStore;
