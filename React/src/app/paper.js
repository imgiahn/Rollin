import { createSlice } from '@reduxjs/toolkit';
import { Papers } from '../data/Paper';

// import { defaultAxios } from "./AxiosApi";
const initialState = {
    paper: Papers,
    isLoading: false,
    error: null,
    selectedUser: {},
    selectedPaper: {},
};

const paperSlice = createSlice({
    name: 'papers',
    initialState,
    reducers: {
        select: (state, action) => {
            state.selectedUser = action.payload;
        },
        selectPaper: (state, { payload }) => {
            console.log(payload);
            state.selectedPaper = payload;
        },
        getPapers: (state, { payload }) => {
            console.log(payload);
            state.paper = payload;
        },
        load: (state) => {
            state.isLoading = true;
        },
        load2: (state, action) => {
            //   state.paperdata = action.payload;
            console.log(action.payload);
        },
        getPapersFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        requestGetGift: (state, action) => {
            console.log('requestGetGift');
        },
        getGiftById: (state, { payload }) => {
            state.selectedPaper = { ...state.selectedPaper, gift: payload };
        },
        getGiftByIdFails: (state, { payload }) => {
            state.error = payload;
        },
    },
});
export const {
    select,
    selectPaper,
    getPapers,
    getPapersFail,
    getSeletedUsersPapers,
    load,
    load2,
    getGiftById,
    getGiftByIdFails,
    requestGetGift,
} = paperSlice.actions;
export default paperSlice.reducer;
