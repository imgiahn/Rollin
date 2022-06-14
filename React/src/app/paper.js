import { createSlice } from '@reduxjs/toolkit';
import { Papers } from '../data/Paper';

// import { defaultAxios } from "./AxiosApi";
const initialState = {
    paper: Papers,
    isLoading: false,
    error: null,
    selectedUser: {},
    selectedPaper: {},
    paperdata: {},
};

const paperSlice = createSlice({
    name: 'papers',
    initialState,
    reducers: {
        select: (state, action) => {
            state.selectedUser = action.payload;
        },
        selectPaper: (state, action) => {
            state.selectedPaper = action.payload;
        },
        getPapers: (state, { payload }) => {
            console.log(payload);
            state.paper = payload;
        },
        load: (state) => {
            state.isLoading = true;
        },
        load2: (state, action) => {
            console.log(action.payload);
        },
        getPapersFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        // getSeletedUserPapers: (state, action) => {
        //   const response = defaultAxios(`/paper/${action.payload.id}`, "get", null);
        //   console.log(response);
        //   state.paper = response;
        // },
    },
});
export const { select, selectPaper, getPapers, getPapersFail, getSeletedUsersPapers, load, load2 } = paperSlice.actions;
export default paperSlice.reducer;
