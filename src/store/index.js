// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
});

const index = configureStore({
    reducer: rootReducer,
});

export default index;
