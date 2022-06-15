import { call, put, takeLatest } from 'redux-saga/effects';
import { getPapersFail, load2 } from './paper';
import { defaultAxios } from './AxiosApi';
import { load3, load4, load5, load6, load7 } from './users';
import { first, second } from './page';

function* postUser(data) {
    try {
        console.log(data);
        console.log(data.payload);
        yield call(defaultAxios, '/user', 'post', data.payload);
        alert('회원가입이 완료되었습니다');
    } catch (error) {
        alert('아이디가 중복입니다 다시 가입해 주세요');
        yield put(getPapersFail(error));
        console.error(error);
    }
}

function* idCheck(data) {
    try {
        console.log('data.payload', data.payload);
        const responser = yield call(defaultAxios, '/user/Id', 'post', data.payload);
        yield put(load5(responser.data));
        // yield put(load4(responser.data));
    } catch (error) {
        alert('아이디가 중복입니다');
        yield put(getPapersFail(error));
        console.error(error);
    }
}

function* LoginCheck(data) {
    try {
        console.log('data.payload', data.payload);
        const responser = yield call(defaultAxios, '/user/Login', 'post', data.payload);
        console.log(responser.data[0].id);
        console.log(responser.data[0].id === undefined);
        alert('로그인 성공');
        yield put(load6(responser.data[0]));
        yield put(first());
        // yield put(load4(responser.data));
    } catch (error) {
        alert('아이디랑 비밀번호를 확인해 주세요');
        yield put(getPapersFail(error));
        console.error(error);
    }
}

export function* watchGetUser() {
    yield yield takeLatest(load7, LoginCheck);
    yield yield takeLatest(load3, postUser);
    yield yield takeLatest(load4, idCheck);
}
