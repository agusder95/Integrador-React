import { createSlice } from "@reduxjs/toolkit";

const storedData = JSON.parse(localStorage.getItem("userData"));
const existAcc = storedData === null || storedData.user == "" ? false : true;

const initialState = {
  user: existAcc ? storedData.user : "",
  pass: existAcc ? storedData.pass : "",
  email: existAcc ? storedData.email : "",
  login: existAcc ? storedData.login : false,
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
    },
    NewPassword: (state, action) => {
      state.pass = action.payload;
    }
  },
});

export const { addUser, setLogin, clearData, NewPassword } = userSlice.actions;
export default userSlice.reducer;
