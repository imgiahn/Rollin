import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../data/User";
import { defaultAxios } from "./AxiosApi";
export type authState = {
  Api: object;
  kakaoid: number;
};
const initialState: authState = {
  Api: {},
  kakaoid: 0,
};
// const GETUSERS = "GETUSERS";
// const SELECT_USER_BY_ID = "SELECT_USER_BY_ID";
// const INSERT_USER = "INSERT_USER";
// const UPDATE_USER = "UPDATE_USER";
// const DELETE_USER = "DELETE_USER";
// const LOGIN = "LOGIN";

const APISlice = createSlice({
  name: "kakaos",
  initialState,
  reducers: {
    putAPI: (state: authState, action: any) => {
      state.Api = action.payload;
    },
    putKaokaoID: (state: authState, action: any) => {
      state.kakaoid = action.payload;
    },
    APIload: (state: authState, action: any) => {
      console.log(action.payload);
    },
    APIload2: (state: authState, action: any) => {
      console.log(action.payload);
    },
    APIload3: (state: authState, action: any) => {
      console.log(action.payload);
    },
  },
  extraReducers: {},
});
export const { putAPI, putKaokaoID, APIload, APIload2, APIload3 } = APISlice.actions;
export default APISlice.reducer;
