import { createSlice } from "@reduxjs/toolkit";

const storedData = localStorage.getItem("userData");
const isLogin = storedData ? JSON.parse(storedData) : null;

const initialState = {
  user: isLogin ? isLogin.user : "",
  pass: isLogin ? isLogin.pass : "",
  email: isLogin ? isLogin.email : "",
  login: isLogin ? isLogin.login : false,
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
  },
});

export const { addUser, setLogin } = userSlice.actions;
export default userSlice.reducer;
