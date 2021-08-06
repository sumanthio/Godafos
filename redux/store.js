import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/CartItem/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
