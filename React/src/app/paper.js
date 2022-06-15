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
<<<<<<< HEAD
=======
    selectPaper: (state, { payload }) => {
      console.log(payload);
      state.selectedPaper = payload;
    },
    getPapers: (state, { payload }) => {
      // console.log(payload);
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
    getGiftFromId: (state, action) => {
      state.selectedPaper = { ...state.selectedPaper, gift: action.payload };
    },
    getGiftByIdFails: (state, { payload }) => {
      state.error = payload;
    },
    // getSeletedUserPapers: (state, action) => {
    //   const response = defaultAxios(`/paper/${action.payload.id}`, "get", null);
    //   console.log(response);
    //   state.paper = response;
    // },
  },
>>>>>>> 67c3efd (debug paging)
});
<<<<<<< HEAD
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
=======
export const { select, selectPaper, getPapers, getPapersFail, getSeletedUsersPapers, load, load2, getGiftFromId, getGiftByIdFails, requestGetGift } =
  paperSlice.actions;
>>>>>>> fd3cfa8 (선택된 Paper의 gift 호출)
export default paperSlice.reducer;
