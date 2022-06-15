import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGiftById, giftsApi } from "./GiftsApi";
const initialState = {
  allGifts: [],
  detailGift: {
    gift: {},
    message: "",
  },
};

// action 타입
const SELECT_GIFT_BY_KEY = "SELECT_GIFT_BY_KEY";
// const SELECT_ALL_GIFTS = "SELECT_ALL_GIFTS";

export const selectGiftByKey = createAsyncThunk(
  SELECT_GIFT_BY_KEY,
  async (payload, thunkAPI) => {
    const gift = await getGiftById(Number(1));
    return gift;
  }
);

// export const selectAllgifts = createAsyncThunk(SELECT_ALL_GIFTS, async () => {
//   return await giftsApi();
// });

export const giftsSlice = createSlice({
  name: "gifts",
  initialState,
  reducers: {
    selectAllGifts: (state, { payload }) => {
      console.log(payload);
      state.allGifts = payload;
    },
    load: (state) => {
      state.isLoading = true;
    },
  },
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

export const { selectAllGifts, load } = giftsSlice.actions;
export default giftsSlice.reducer;
