// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

const index = configureStore({
    reducer: rootReducer,
});

export default index;
