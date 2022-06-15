import { createSlice } from '@reduxjs/toolkit';
import { call } from 'redux-saga/effects';
import { Users } from '../data/User';
import { defaultAxios } from './AxiosApi';
const initialState = {
    users: Users,
    isLogin: false,
    check: 0,
    login: {},
    me: { uid: 1, name: 'seo', id: 'seo', img: '/img/profile/2.jpeg', password: '1234' },
};
// const GETUSERS = "GETUSERS";
// const SELECT_USER_BY_ID = "SELECT_USER_BY_ID";
// const INSERT_USER = "INSERT_USER";
// const UPDATE_USER = "UPDATE_USER";
// const DELETE_USER = "DELETE_USER";
// const LOGIN = "LOGIN";

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
        },
        load3: (state, action) => {
            console.log(action.payload);
        },
        load4: (state, action) => {
            console.log(action.payload);
        },
        load7: (state, action) => {
            console.log(action.payload);
        },
        load5: (state, action) => {
            state.check = action.payload;
        },
        load6: (state, action) => {
            state.login = action.payload;
        },
        fistload: (state, action) => {
            state.check = 0;
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
export const { login, getUsers, selectUserById, load3, load4, load5, load6, load7, fistload } = userSlice.actions;
export default userSlice.reducer;
