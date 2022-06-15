import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './users';
import pageReducer from './page';
import paperReducer from './paper';
import gifts from './gifts';
import { watchGetGifts } from './giftSaga';
import { watchGetPaper } from './paperSaga';
import { all } from 'redux-saga/effects';
import { watchGetUser } from './userSaga';
const reducer = combineReducers({
    user: userReducer,
    page: pageReducer,
    paper: paperReducer,
    gifts,
});
const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
<<<<<<< HEAD
    yield all([watchGetPaper(), watchGetGifts(), watchGetUser()]);
=======
  yield all([watchGetPaper(), watchGetGifts()]);
>>>>>>> fd3cfa8 (선택된 Paper의 gift 호출)
}
// export const store = configureStore({
//   reducer,
//   devTools: true,
//   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
// });
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
