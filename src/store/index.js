// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import notificationSlice from "./notificationSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  notification: notificationSlice,
});

const index = configureStore({
  reducer: rootReducer,
});

export default index;
