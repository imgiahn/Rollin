import React from "react";
import { useSelector } from "react-redux";
import Front from "./component/front/Front";
// import Main from "./component/main/Main";
// import ProfileMain from "./component/profile/ProfileMain";
import UserList from "./component/main/UserList";
import PaperMain from "./component/paper/PaperMain";
import SendBody from "./component/profile/SendBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GiftDetail from "./component/gifts/GiftDetail";
import Gifts from "./app/gifts";
import AuthRouter from "./component/AuthRouter";
function App() {
  // const page = useSelector((state) => state.page);
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AuthRouter />
                <Front />
              </>
            }
          ></Route>
          <Route
            path="/paper"
            element={
              <>
                <AuthRouter />
                <PaperMain />
              </>
            }
          ></Route>
          <Route path="/profile" element={<UserList />}></Route>
          <Route path="/add" element={<SendBody />}></Route>
          <Route path="/gifts" element={<Gifts></Gifts>}></Route>
          <Route path="/detailGift" element={<GiftDetail></GiftDetail>}></Route>
        </Routes>
      </BrowserRouter>
      {/* {page.first ? <Main /> : <Front />} */}
    </div>
  );
}

export default App;
