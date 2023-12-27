import { createSlice } from "@reduxjs/toolkit";


const initialState = {     
     cartItems: [],
}

const cartSlice = createSlice({
     name: "cart",
     initialState: initialState,
     reducers: {
          addCart: (state, action) => {
               if(!state.cartItems.some(product => product.id === action.payload.id)){
                    state.cartItems = [...state.cartItems, action.payload]
               }

               /* state.cartItems.push(action.payload) */
          },
          removeItemCart: (state, action) => {
               return state.cartItems.filter(item => item.id !== action.payload)
          }
     }
})

export const { addCart, removeItemCart } = cartSlice.actions
export default cartSlice.reducer