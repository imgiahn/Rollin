import { call, put, takeLatest, select } from "redux-saga/effects";
import { giftAxios } from "../http/GiftAxios";
import { defaultAxios } from "./AxiosApi";
import { selectAllGifts, load, getGiftByIdSaga, getGiftByIdFails, requestGetGift } from "./gifts";

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
export function* watchGetGifts() {
  yield takeLatest(load, handleGetGifts); //액션에 대해서 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업에 대해서만 액션 수행
}
