import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  first: false,
  second: false,
  third: false,
  fourth: false,
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
  },
});
export const { first, second, third, fourth } = pageSlice.actions;
export default pageSlice.reducer;
