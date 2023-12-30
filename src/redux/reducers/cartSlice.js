import { createSlice } from "@reduxjs/toolkit";
const storedData = JSON.parse(localStorage.getItem("cartItems"));
const existId = storedData === null || storedData.id == "" ? false : true;

const initialState = {
  cartItems: existId ? storedData : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (
        !state.cartItems.some((product) => product.id === action.payload.id)
      ) {
        state.cartItems = [...state.cartItems, action.payload];
      }
    },
    removeItemCart: (state, action) => {
      return state.cartItems.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  },
});

export const { addCart, removeItemCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
