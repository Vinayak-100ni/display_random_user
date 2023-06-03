import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slice/UserSlice.jsx";

const store = configureStore({
  reducer:{
    users: userSlice,
  },
});

export default store;