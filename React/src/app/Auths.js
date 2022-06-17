import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../data/User";
import { defaultAxios } from "./AxiosApi";
const initialState = {
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
        putAPI: (state, action) => {
            state.Api = action.payload;
        },
        putKaokaoID: (state, action) => {
            state.kakaoid = action.payload;
        },
        APIload: (state, action) => {
            console.log(action.payload);
        },
        APIload2: (state, action) => {
            console.log(action.payload);
        },
        APIload3: (state, action) => {
            console.log(action.payload);
        },
    },
    extraReducers: {},
});
export const { putAPI, putKaokaoID, APIload, APIload2, APIload3 } = APISlice.actions;
export default APISlice.reducer;
