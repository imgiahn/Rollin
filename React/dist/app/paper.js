import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    paper: null,
    isLoading: false,
    error: null,
    selectedUser: null,
    selectedPaper: null,
};
const paperSlice = createSlice({
    name: "papers",
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
            console.log("requestGetGift");
        },
        getGiftFromId: (state, { payload }) => {
            state.selectedPaper = Object.assign(Object.assign({}, state.selectedPaper), { gift: payload });
        },
        getGiftByIdFails: (state, { payload }) => {
            state.error = payload;
        },
    },
});
export const { select, selectPaper, getPapers, getPapersFail, load, load2, getGiftFromId, getGiftByIdFails, requestGetGift } = paperSlice.actions;
export default paperSlice.reducer;
