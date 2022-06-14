import { call, put, takeLatest, select } from "redux-saga/effects";
import { getPapers, getPapersFail, load } from "./paper";
import { defaultAxios } from "./AxiosApi";

function* handleGetAllPaper() {
  try {
    const paper = yield call(defaultAxios, "/paper", "get", null);
    yield put(getPapers(paper.data));
  } catch (error) {
    console.error(error);
    yield put(getPapersFail(error));
  }
}
function* handleGetPaperById() {
  try {
    const id = yield select((state) => state.user.me.uid);
    const paper = yield call(defaultAxios, `/paper/${id}`, "get", null);
    yield put(getPapers(paper.data));
  } catch (error) {
    console.error(error);
    yield put(getPapersFail(error));
  }
}
export function* watchGetPaper() {
  yield takeLatest(load, handleGetPaperById);
}
