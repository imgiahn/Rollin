import { call, put, takeLatest } from 'redux-saga/effects';
import { getPapers, getPapersFail, load, load2 } from './paper';
import { defaultAxios } from './AxiosApi';

function* handleGetPaper() {
    try {
        console.log('handle start');
        const paper = yield call(defaultAxios, '/paper', 'get', null);
        console.log(paper.data);
        yield put(getPapers(paper.data));
    } catch (error) {
        console.error(error);
        yield put(getPapersFail(error));
    }
}

function* postPaper(data) {
    try {
        console.log(data);
        console.log(data.payload);

        yield call(defaultAxios, '/paper', 'post', data.payload);
    } catch (error) {
        yield put(getPapersFail(error));
        console.error(error);
    }
}

export function* watchGetPaper() {
    yield yield takeLatest(load2, postPaper);
    yield yield takeLatest(load, handleGetPaper);
}
