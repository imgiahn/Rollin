import React from "react";
import { useDispatch } from "react-redux";
import { first, second } from "../../app/page";
import { Link, useLocation } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="container w-25">
      <form className="align-middle" method="get" action="/main">
        <div className="row form-floating mb-3">
          <input className="form-control" type="text" name="id" placeholder="id" />
          <label htmlFor="id">ID </label>
        </div>
        <div className="row form-floating mb-3">
          <input className="form-control" type="password" name="password" placeholder="pwd" />
          <label htmlFor="password">Password </label>
        </div>
        <div className="row">
          <Link to="/profile" className="btn btn-outline-primary" type="button">
            로그인
          </Link>
          <div className="form-text">
            아이디가 없으신가요?
            <button className="btn btn-sm btn-link" type="button" onClick={() => dispatch(second())}>
              회원가입
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
