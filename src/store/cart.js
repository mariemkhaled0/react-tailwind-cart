import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isShowen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const isFound = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (isFound >= 0) {
        state.items[isFound].quantity += quantity;
      } else state.items.push({ productId, quantity });
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const findItem = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (quantity > 0) {
        state.items[findItem].quantity = quantity;
      } else {
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      }
    },
    toggleCart(state) {
      if (state.isShowen === false) {
        state.isShowen = true;
      } else {
        state.isShowen = false;
      }
    },
  },
});
export const { addToCart, changeQuantity, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
