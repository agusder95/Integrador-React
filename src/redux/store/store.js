import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../reducers/categorySlice"
import userInfoReducer from "../reducers/userSlice"
const store = configureStore({
     reducer:{
          category : categoryReducer,
          userInfo : userInfoReducer,

     }
})
export default store