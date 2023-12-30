import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartSlice"
import userInfoReducer from "../reducers/userSlice"


const store = configureStore({
     reducer:{
          cartInfo : cartReducer,
          userInfo : userInfoReducer,
     }
})
export default store