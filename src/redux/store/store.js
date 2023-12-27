import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartSlice"
import userInfoReducer from "../reducers/userSlice"
import productReducer from "../reducers/productSlice";

const store = configureStore({
     reducer:{
          cartInfo : cartReducer,
          userInfo : userInfoReducer,
          productInfo : productReducer,
     }
})
export default store