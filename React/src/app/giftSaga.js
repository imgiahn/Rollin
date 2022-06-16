import { call, put, takeLatest, select } from "redux-saga/effects";
import { giftAxios } from "../http/GiftAxios";
import { defaultAxios } from "./AxiosApi";
import {
  selectAllGifts,
  load,
  getGiftByIdSaga,
  getGiftByIdFails,
  requestGetGift,
  selectGiftByKey,
  selectReceivers,
  insertGift,
  insertGiftFail,
  load2,
  load3,
} from "./gifts";

////////액션
function* handleGetGifts() {
  try {
    console.log("handle start");
    const gift = yield call(giftAxios, "/gift/", "get"); //call은 주어진 함수를 실행한다
    console.log(gift);
    yield put(selectAllGifts(gift)); //put은 특정 액션을 dispatch한다
  } catch (error) {
    console.error(error);
  }
}

function* handleSelectGiftByKey(data) {
  try {
    // const giftId = yield select((state) => state.gifts.giftId);
    console.log("handleSelectGiftByKey, data: ", data);
    console.log("handleSelectGiftByKey, data.payload: ", data.payload);
    const giftId = data.payload;
    // console.log("handleSelectGiftByKey, giftId:", giftId);
    const giftByKey = yield call(giftAxios, `/gift/${giftId}`, "get");
    console.log("handleSelectGiftByKey, giftByKey: ", giftByKey);
    yield put(selectGiftByKey(giftByKey));
  } catch (error) {
    console.error(error);
  }
}

function* handleSelectReceivers(data) {
  try {
    // const userId = yield select((state) => state.user.me.uid);
    const userId = data.payload;
    const receivers = yield call(giftAxios, `/gift/receiver/${userId}`, "get");
    console.log("handleSelectReceivers, receivers:", receivers);
    yield put(selectReceivers(receivers));
  } catch (error) {
    console.error(error);
  }
}

function* postGift(data) {
  try {
    console.log("postGift, data:", data);
    console.log("postGift, data.payload", data.payload);
    yield call(giftAxios, "/gift", "post", data.payload);
    alert("선물을 보냈습니다");
  } catch (error) {
    yield put(insertGiftFail(error));
    console.error(error);
  }
}

export function* watchGetGifts() {
  yield takeLatest(load, handleGetGifts); //액션에 대해서 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업에 대해서만 액션 수행
  yield takeLatest(load2, handleSelectGiftByKey);
  yield takeLatest(load3, handleSelectReceivers);
  yield takeLatest(insertGift, postGift);
}
