import { createSlice } from "@reduxjs/toolkit";



const storedData = JSON.parse(localStorage.getItem("userData")) ;
const existAcc = storedData === null || storedData.user == '' ? false : true;
/* console.log (storedData.login) */

const initialState = {
  
  user : existAcc ? storedData.user : "",
  pass : existAcc ? storedData.pass : "",
  email : existAcc ? storedData.email : "",
  login : existAcc ? storedData.login : false,

  /* user: isLogin ? isLogin.user : "",
  pass: isLogin ? isLogin.pass : "",
  email: isLogin ? isLogin.email : "",
  login: isLogin ? isLogin.login : false, */
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { user, pass, email } = action.payload;
      state.user = user;
      state.pass = pass;
      state.email = email;
    },
    setLogin: (state, action) => {
      if (action.payload) {
        state.login = true;
      } else {
        state.login = false;
      }
    },
    clearData: (state) => {
      state.user = "";
      state.pass = "";
      state.email = "";
      state.login = false;
    }
  },
});

export const { addUser, setLogin, clearData } = userSlice.actions;
export default userSlice.reducer;
