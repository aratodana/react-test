import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.find((item) => item.id === product.id);
            if (!existingProduct) {
                state.push(product);
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
