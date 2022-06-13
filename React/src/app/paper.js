import { createSlice } from "@reduxjs/toolkit";
import { Papers } from "../data/Paper";

const initialState = {
  paper: Papers,
  selectedUser: {},
  selectedPaper: {},
};

const paperSlice = createSlice({
  name: "papers",
  initialState,
  reducers: {
    select: (state, action) => {
      state.selectedUser = action.payload;
    },
    selectPaper: (state, action) => {
      state.selectedPaper = action.payload;
    },
  },
});
export const { select, selectPaper } = paperSlice.actions;
export default paperSlice.reducer;
