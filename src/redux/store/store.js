import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../reducers/categorySlice"
const store = configureStore({
     reducer:{
          category : categoryReducer
     }
})
export default store