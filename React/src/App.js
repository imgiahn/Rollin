import React from "react";
import { useSelector } from "react-redux";
import Front from "./component/front/Front";
import Main from "./component/main/Main";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/front/Login";
import GiftDetail from "./component/gifts/GiftDetail";
import Gifts from "./app/gifts";
function App() {
  // const page = useSelector((state) => state.page);
  return (
    // <div className="App">
    //   <header className="App-header"></header>
    //   {page.first ? <Main /> : <Front />}
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/gifts" element={<Gifts></Gifts>}></Route>
        <Route path="/detailGift" element={<GiftDetail></GiftDetail>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
