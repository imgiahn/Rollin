import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../data/User";
const initialState = {
  users: Users,
  isLogin: false,
  me: { uid: 1, name: "seo", id: "seo", img: "/img/profile/2.jpeg", password: "1234" },
};
// const GETUSERS = "GETUSERS";
// const SELECT_USER_BY_ID = "SELECT_USER_BY_ID";
// const INSERT_USER = "INSERT_USER";
// const UPDATE_USER = "UPDATE_USER";
// const DELETE_USER = "DELETE_USER";
// const LOGIN = "LOGIN";

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
    },
    // getUsers: (state, action) => {
    //   state.value = action.payload;
    // },
    // selectUserById: (state, action) => {
    //   state.value = action.payload;
    // },
  },
  extraReducers: {},
});
export const { login, getUsers, selectUserById } = userSlice.actions;
export default userSlice.reducer;
