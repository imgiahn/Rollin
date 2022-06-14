import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getPapers, getPapersFail, load, load2 } from './paper';
import { defaultAxios } from './AxiosApi';

function* postPaper(data) {
    try {
        console.log(data);
        console.log(data.payload);
        yield call(defaultAxios, '/paper', 'post', data.payload);
        alert('작성이 완료되었습니다');
    } catch (error) {
        yield put(getPapersFail(error));
        console.error(error);
    }
}

function* handleGetAllPaper() {
    try {
        const paper = yield call(defaultAxios, '/paper', 'get', null);
        yield put(getPapers(paper.data));
    } catch (error) {
        console.error(error);
        yield put(getPapersFail(error));
    }
}
function* handleGetPaperById() {
    try {
        const id = yield select((state) => state.user.me.uid);
        const paper = yield call(defaultAxios, `/paper/${id}`, 'get', null);
        yield put(getPapers(paper.data));
    } catch (error) {
        console.error(error);
        yield put(getPapersFail(error));
    }
}

export function* watchGetPaper() {
    yield yield takeLatest(load2, postPaper);
    yield yield takeLatest(load, handleGetPaperById);
}
