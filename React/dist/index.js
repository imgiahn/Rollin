import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import { store, rootSaga } from "./app/store";
import App from "./App";
import createStore from "./app/store";
import reportWebVitals from "./reportWebVitals";
//store.js 배출
const store = createStore();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Provider store={store}>
    <App />
  </Provider>);
reportWebVitals();
