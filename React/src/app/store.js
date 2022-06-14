import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watchGetPaper, watchpostPaper } from './paperSaga';
import { all } from 'redux-saga/effects';
import userReducer from './users';
import pageReducer from './page';
import paperReducer from './paper';
const reducer = combineReducers({
    user: userReducer,
    page: pageReducer,
    paper: paperReducer,
    // rollins,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([watchGetPaper()]);
}
const createStore = () => {
    const store = configureStore({
        reducer,
        devTools: true,
        middleware: [sagaMiddleware],
    });

    sagaMiddleware.run(rootSaga);

    return store;
};
export default createStore;
