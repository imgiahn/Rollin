import React from "react";
import { useDispatch } from "react-redux";
import { second } from "../../app/page";
const Regi = () => {
  const dispatch = useDispatch();
  return (
    <div className="container w-25">
      <form method="POST" action="">
        <div className="row form-floating mb-3">
          <input className="form-control" type="text" name="id" placeholder="id" />
          <label htmlFor="id">ID </label>
        </div>
        <div className="row form-floating mb-3">
          <input className="form-control" type="password" name="password" placeholder="pwd" />
          <label htmlFor="password">Password </label>
        </div>
        <div className="row form-floating mb-3">
          <input className="form-control" type="text" name="name" placeholder="name" />
          <label htmlFor="name">Name </label>
        </div>
        <div className="row">
          <input className="btn btn-outline-primary" type="button" onClick={() => dispatch(second())} value="회원가입" />
          <div className="form-text">
            이미 아이디가 있으신까요?{" "}
            <button className="btn btn-sm btn-link" type="button" onClick={() => dispatch(second())}>
              로그인
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Regi;
