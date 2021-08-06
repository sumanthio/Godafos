import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const getCurrentCartItem = (currentState, uuid) =>
  currentState.findIndex((item) => item.uuid === uuid);

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    setCartItems: (state, { payload }) => {
      state.cartItems = payload;
    },
    deleteCartItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.uuid !== payload);
    },
    increaseQuantity: (state, { payload: { uuid, quantity } }) => {
      let tempCartIndex = getCurrentCartItem(state.cartItems, uuid);
      state.cartItems[tempCartIndex].quantity =
        quantity >= 10 ? quantity : quantity + 1;
    },
    decreaseQuantity: (state, { payload: { uuid, quantity } }) => {
      let tempCartIndex = getCurrentCartItem(state.cartItems, uuid);
      state.cartItems[tempCartIndex].quantity =
        quantity < 1 ? quantity : quantity - 1;
    },
  },
});

export const {
  setCartItems,
  deleteCartItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
