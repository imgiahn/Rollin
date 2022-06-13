import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./users";
import pageReducer from "./page";
import paperReducer from "./paper";
const reducer = combineReducers({
  user: userReducer,
  page: pageReducer,
  paper: paperReducer,
  // rollins,
});
export const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
