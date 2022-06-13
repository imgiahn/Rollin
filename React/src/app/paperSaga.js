import { call, put, takeLatest } from "redux-saga/effects";
import { getPapers, getPapersFail, load } from "./paper";
import { defaultAxios } from "./AxiosApi";

function* handleGetPaper() {
  try {
    console.log("handle start");
    const paper = yield call(defaultAxios, "/paper", "get", null);
    console.log(paper.data);
    yield put(getPapers(paper.data));
  } catch (error) {
    console.error(error);
    yield put(getPapersFail(error));
  }
}

export function* watchGetPaper() {
  yield yield takeLatest(load, handleGetPaper);
}
