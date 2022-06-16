import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { checkLogin } from "../app/users";

const AuthRouter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = useSelector((state) => state.user.isLogin);
  const checkIsLoginFunc = async () => {
    await dispatch(checkLogin());
    isLogin ? console.log("togo") : navigate("/");
  };
  useEffect(() => {
    checkIsLoginFunc();
  }, []);
  const toGo = () => {
    const from = location.pathname || "/profile";
    navigate(from === "/" ? "/profile" : from);
  };
  return <></>;
};
export default AuthRouter;
