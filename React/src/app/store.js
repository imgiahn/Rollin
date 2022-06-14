import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./users";
import pageReducer from "./page";
import paperReducer from "./paper";
import gifts from "./gifts";
const reducer = combineReducers({
  user: userReducer,
  page: pageReducer,
  paper: paperReducer,
  gifts,
  // rollins,
});
export const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
