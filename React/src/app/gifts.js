import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Users } from "../data/User";
import { getGiftById } from "./GiftsApi";
import { loginCheckApi } from "./usersApi";
const initialState = {
  detailGift: {
    gift: {},
    message: "",
  },
};

// action 타입
const SELECT_GIFT_BY_KEY = "SELECT_GIFT_BY_KEY";

export const selectGiftByKey = createAsyncThunk(
  SELECT_GIFT_BY_KEY,
  async (payload, thunkAPI) => {
    const gift = await getGiftById(Number(1));
    return gift;
  }
);

export const giftsSlice = createSlice({
  name: "gifts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(selectGiftByKey.fulfilled, (state, { payload }) => {
        const newDetailGift = { ...state.detailGift };
        if (payload) {
          newDetailGift.gift = payload;
          return { ...state, detailGift: newDetailGift };
        } else {
          newDetailGift.message = "상품이 없습니다.";
          return { ...state, detailGift: newDetailGift };
        }
      })
      .addCase(selectGiftByKey.rejected, (state, { error }) => {
        const newDetailGift = { ...state.detailGift };
        newDetailGift.message = error.message;
        return { ...state, detailGift: newDetailGift };
      });
  },
});

export default giftsSlice.reducer;
