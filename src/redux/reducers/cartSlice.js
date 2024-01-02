import { createSlice } from "@reduxjs/toolkit";
const storedData = JSON.parse(localStorage.getItem("cartItems"));
const existId = storedData === null || storedData.id == "" ? false : true;

const initialState = {
  cartItems: existId ? storedData : [],
  totalPrice: existId
    ? storedData.reduce((sum, obj) => sum + obj.price * obj.quantity, 0)
    : 0,

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
        state.totalPrice =
          state.totalPrice + action.payload.price * action.payload.quantity;
      }
    },

    actualizeCart: (state, action) => {
      const itemToUpdate = action.payload;
      let oldTotal;
      state.cartItems = state.cartItems.map((item) =>
        item.id === itemToUpdate.id
          ? ((oldTotal = item.price * item.quantity), itemToUpdate)
          : item
      );
      state.totalPrice =
        state.totalPrice -
        oldTotal +
        itemToUpdate.price * itemToUpdate.quantity;
    },
    removeItemCart: (state, action) => {
      const itemToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== itemToRemove.id
      );

      state.totalPrice =
        state.totalPrice - itemToRemove.price * itemToRemove.quantity;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addCart, removeItemCart, clearCart, actualizeCart } =
  cartSlice.actions;
export default cartSlice.reducer;
