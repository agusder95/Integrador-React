import { createSlice } from "@reduxjs/toolkit";

const initialState ={
     userLogin : [{
          user:'',
          pass:'',
          email:'',
     }]
}

const userSlice = createSlice({
     name: "userInfo",
     initialState:initialState,
     reducers:{
          setUserLogin:(state, action)=>{
               state.userLogin = action.payload
          }
     }
})

export const {setUserLogin} = userSlice.actions
export default userSlice.reducer