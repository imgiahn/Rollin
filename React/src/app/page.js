import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  first: false,
  second: false,
  third: false,
  fourth: false,
  fifth: "",
};

const pageSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    first: (state, action) => {
      state.first = !state.first;
    },
    second: (state, action) => {
      state.second = !state.second;
    },
    third: (state, action) => {
      state.third = !state.third;
    },
    fourth: (state, action) => {
      state.fourth = !state.fourth;
    },
    fifth: (state, action) => {
      console.log(action.payload);
      state.fifth = action.payload;
    },
  },
});
export const { first, second, third, fourth, fifth } = pageSlice.actions;
export default pageSlice.reducer;
