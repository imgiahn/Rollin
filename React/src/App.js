import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Front from "./component/front/Front";
import Main from "./component/main/Main";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import GiftDetail from "./component/gifts/GiftDetail";
function App() {
  const page = useSelector((state) => state.page);
  return (
    <div className="App">
      <header className="App-header"></header>
      {page.first ? <Main /> : <Front />}
    </div>
  );
}

export default App;
