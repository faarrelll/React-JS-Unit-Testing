import { Cart } from "@/lib/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialValue: { value: Cart[] } = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.value.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.value.push({ ...newItem, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.value = state.value.filter((item) => item.id !== itemId);
    },

    minusQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.value.find((item) => item.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    plusQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.value.find((item) => item.id === itemId);

      if (item) {
        item.quantity += 1;
      }
    },
  },
});
export const { addToCart, plusQuantity, minusQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
