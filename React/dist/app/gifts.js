var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGiftById, getReceiverNamesNotUserId, giftsApi } from "./GiftsApi";
const initialState = {
    allGifts: [],
    detailGift: {
        gift: {},
        message: "",
    },
    receiversInfo: {
        receivers: [],
        message: "",
    },
};
// action 타입
const SELECT_GIFT_BY_KEY = "SELECT_GIFT_BY_KEY";
const SELECT_ALL_GIFTS = "SELECT_ALL_GIFTS";
const SELECT_RECEIVERS_BY_KEY = "SELECT_RECEIVER_NAMES_BY_KEY";
const INSERT_GIFT = "INSERT_GIFT";
export const selectGiftByKey = createAsyncThunk(SELECT_GIFT_BY_KEY, (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const gift = yield getGiftById(Number(1));
    return gift;
}));
// 로그인한 user id가 아닌 사람들 name 가져오기
export const selectReceivers = createAsyncThunk(SELECT_RECEIVERS_BY_KEY, (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const receivers = yield getReceiverNamesNotUserId(Number(1));
    return receivers;
}));
export const selectAllgifts = createAsyncThunk(SELECT_ALL_GIFTS, () => __awaiter(void 0, void 0, void 0, function* () {
    return yield giftsApi();
}));
export const insertGift = createAsyncThunk(INSERT_GIFT, (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { receiverId, content } = payload;
    //giftId 받아온걸로 바꿔주기
    const gift = {
        userId: Number(receiverId),
        nickname: "nickname",
        content,
        giftId: 1,
    };
    console.log(receiverId);
    //return await postGift(gift);
    {
        /* receiverId가 안들어가는 오류 -> 고쳐야됌*/
    }
}));
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
            const newDetailGift = Object.assign({}, state.detailGift);
            if (payload) {
                newDetailGift.gift = payload;
                return Object.assign(Object.assign({}, state), { detailGift: newDetailGift });
            }
            else {
                newDetailGift.message = "상품이 없습니다.";
                return Object.assign(Object.assign({}, state), { detailGift: newDetailGift });
            }
        })
            .addCase(selectGiftByKey.rejected, (state, { error }) => {
            const newDetailGift = Object.assign({}, state.detailGift);
            newDetailGift.message = error.message;
            return Object.assign(Object.assign({}, state), { detailGift: newDetailGift });
        })
            .addCase(selectReceivers.fulfilled, (state, { payload }) => {
            const newReceiversInfo = Object.assign({}, state.receiversInfo);
            if (payload) {
                newReceiversInfo.receivers = payload;
                return Object.assign(Object.assign({}, state), { receiversInfo: newReceiversInfo });
            }
            else {
                newReceiversInfo.message = "받을 수 있는 사람이 없습니다";
                return Object.assign(Object.assign({}, state), { receiversInfo: newReceiversInfo });
            }
        })
            .addCase(selectReceivers.rejected, (state, { error }) => {
            const newReceiversInfo = Object.assign({}, state.receiversInfo);
            newReceiversInfo.message = error.message;
            return Object.assign(Object.assign({}, state), { receiversInfo: newReceiversInfo });
        })
            .addCase(insertGift.fulfilled, (state, { payload }) => {
            return Object.assign({}, state);
        })
            .addCase(insertGift.rejected, (state, { error }) => {
            return Object.assign({}, state);
        });
    },
});
export const { selectAllGifts, load } = giftsSlice.actions;
export default giftsSlice.reducer;
