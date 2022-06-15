import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import { store, rootSaga } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//store.js 배출

// import { store } from "./app/store";
import createStore from "./app/store";

const store = createStore();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
