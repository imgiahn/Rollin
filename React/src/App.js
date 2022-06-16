import React from "react";
import { useSelector } from "react-redux";
import Front from "./component/front/Front";
import Main from "./component/main/Main";
import ProfileMain from "./component/profile/ProfileMain";
import UserList from "./component/main/UserList";
import PaperDetail from "./component/profile/PaperDetail";
import PapersList from "./component/profile/PaperList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  const page = useSelector((state) => state.page);
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={page.first ? <Main /> : <Front />}></Route>
          <Route path="/profile" element={page.third ? <ProfileMain /> : <UserList />}></Route>
          <Route path="/paper" elemnt={page.fourth ? <PaperDetail /> : <PapersList />}></Route>
        </Routes>
      </BrowserRouter>
      {/* {page.first ? <Main /> : <Front />} */}
    </div>
  );
}

export default App;
