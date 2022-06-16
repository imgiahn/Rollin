import React, { useState, useEffect } from "react";
import Login from "./Login";
import Join from "./Join";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Front = () => {
  const navigate = useNavigate();
  const [pageSet, setpageSet] = useState("login");
  const page = useSelector((state) => state.page);
  const isLogin = useSelector((state) => state.user.isLogin);
  useEffect(() => {
    if (isLogin) navigate("/profile");
  }, [isLogin]);
  return pageSet === "join" ? <Join setpageSet={setpageSet} /> : <Login setpageSet={setpageSet} />;
};

export default Front;
