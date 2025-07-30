// redux/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // each item: { productId, title, price, quantity }
  },
  reducers: {
    addToCart: (state, action) => {
      const { productId, title, price, quantity } = action.payload;
      const existingItem = state.items.find(item => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ productId, title, price, quantity });
      }
    },

    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      state.items = state.items.filter(item => item.productId !== productIdToRemove);
    },

    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.productId === productId);
      if (item) {
        item.quantity = quantity;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
