import { call, put, takeLatest } from "redux-saga/effects";
import { getPapersFail, load2 } from "./paper";
import { defaultAxios } from "./AxiosApi";
import { getUsers, getUserById, login, load3, load4, load5, load7, checkLogin } from "./users";

function* getUser() {
  try {
    const response = yield call(defaultAxios, "user", "get");
    yield put(getUsers(response.data));
  } catch (error) {
    console.error(error);
  }
}
function* postUser(data) {
  try {
    console.log(data);
    console.log(data.payload);
    yield call(defaultAxios, "/user", "post", data.payload);
    alert("회원가입이 완료되었습니다");
  } catch (error) {
    alert("아이디가 중복입니다 다시 가입해 주세요");
    yield put(getPapersFail(error));
    console.error(error);
  }
}

function* idCheck(data) {
  try {
    console.log("data.payload", data.payload);
    const responser = yield call(defaultAxios, "/user/Id", "post", data.payload);
    yield put(load5(responser.data));
    // yield put(load4(responser.data));
  } catch (error) {
    alert("아이디가 중복입니다");
    yield put(getPapersFail(error));
    console.error(error);
  }
}

function* LoginCheck(data) {
  try {
    // console.log('data.payload', data.payload);
    const response = yield call(defaultAxios, "/user/login", "post", data.payload);
    console.log(response);
    console.log(response.data[0].id === undefined);
    yield put(getUserById(response.data[0]));
    yield put(login(true));
    localStorage.setItem("loginUser", response.data[0].id);
    // yield put(load4(responser.data));
  } catch (error) {
    alert("아이디랑 비밀번호를 확인해 주세요");
    yield put(getPapersFail(error));
    yield put(login(false));
    console.error(error);
  }
}
function* handleCheckLogin() {
  try {
    const myId = localStorage.getItem("loginUser");
    const response = yield call(defaultAxios, `/user/${myId}`, "get");
    yield put(getUserById({ ...response.data[0], id: Number(myId) }));
    yield put(login(true));
  } catch (error) {
    //console.error(error);
    yield put(login(false));
  }
}
export function* watchGetUser() {
  yield takeLatest(load7, LoginCheck);
  yield takeLatest(login, getUser);
  yield takeLatest(load3, postUser);
  yield takeLatest(load4, idCheck);
  yield takeLatest(checkLogin, handleCheckLogin);
}
