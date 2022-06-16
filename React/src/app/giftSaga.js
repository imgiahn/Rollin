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
  requestGetGiftName,
  requestSort,
} from "./gifts";

////////액션

function* handleSearchGifts(data) {
  try {
    console.log("search start");
    const giftName = data.payload.giftName;
    let gift = "";
    if (giftName === undefined || giftName === "") {
      console.log(giftName);
      gift = yield call(giftAxios, "/gift/", "get"); //call은 주어진 함수를 실행한다
    } else {
      console.log(giftName);
      gift = yield call(giftAxios, `/gift/search/${giftName}`, "get");
    }
    yield put(selectAllGifts(gift)); //put은 특정 액션을 dispatch한다
  } catch (error) {
    console.log(error);
  }
}

function* handleSortGift(data) {
  try {
    console.log("sort start");
    const sortKey = data.payload.sortKey;
    const allGifts = yield call(giftAxios, "/gift/", "get");
    console.log(allGifts, sortKey);
    const gifts = allGifts.slice();
    if (sortKey === "default") {
      console.log("no sort");
    } else if (sortKey === "count") {
      gifts.sort(function (a, b) {
        return b.count - a.count;
      });
      console.log("sort by count");
    } else if (sortKey === "view") {
      gifts.sort(function (a, b) {
        return b.views - a.views;
      });
      console.log("sort by view");
    } else if (sortKey === "lprice") {
      gifts.sort(function (a, b) {
        return a.price - b.price;
      });
      console.log("sort by lprice");
    } else if (sortKey === "hprice") {
      gifts.sort(function (a, b) {
        return b.price - a.price;
      });
      console.log("sort by hprice");
    }
    yield put(selectAllGifts(gifts));
  } catch (error) {
    console.log(error);
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
  //액션에 대해서 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업에 대해서만 액션 수행
  yield takeLatest(load2, handleSelectGiftByKey);
  yield takeLatest(load3, handleSelectReceivers);
  yield takeLatest(insertGift, postGift);
  yield takeLatest(requestGetGiftName, handleSearchGifts);
  yield takeLatest(requestSort, handleSortGift);
}
