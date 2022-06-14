import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { giftsApi } from "./GiftsApi";

const initialState = {
  allGifts: {},
};

const SELECT_ALL_GIFTS = "SELECT_ALL_GIFTS";

export const selectAllgifts = createAsyncThunk(SELECT_ALL_GIFTS, async () => {
  return await giftsApi();
});

export const usersSlice = createSlice({
  name: "gifts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(selectAllgifts.pending, (state, { payload }) => {
        const newGifts = { ...state.allGifts };
        newGifts.loading = true;
        return { ...state, allGifts: newGifts };
      })
      .addCase(selectAllgifts.fulfilled, (state, { payload }) => {
        const newGifts = { ...state.allGifts };
        newGifts.loading = true;
        if (payload) {
          newGifts.gifts = payload;
          return { ...state, allGifts: newGifts };
        } else {
          newGifts.message = "선물이 없습니다";
          return { ...state, allGifts: newGifts };
        }
      })
      .addCase(selectAllgifts.rejected, (state, { error }) => {
        const newGifts = { ...state.allGifts };
        newGifts.loading = false;
        newGifts.message = error.message;
        return { ...state, allGifts: newGifts };
      });
  },
});
export default usersSlice.reducer;
