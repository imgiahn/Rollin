import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fistload, load3, load5 } from "../../app/users";
const Regi = ({ setpageSet }) => {
  const dispatch = useDispatch();
  const idCheck = useSelector((state) => state.user.check);
  console.log(idCheck);
  console.log(idCheck);

  const makeSubmit = () => {
    let form = document.frm;
    if (form.userId.value === "") {
      alert("ID를 입력해 주세요");
    } else if (form.password.value === "") {
      alert("Password를 입력해 주세요");
    } else if (form.name.value === "") {
      alert("이름을 입력해 주세요");
    } else {
      dispatch(
        load5({
          userId: form.userId.value,
        })
      );

      if (idCheck === 0) {
        dispatch(
          load3({
            userId: form.userId.value,
            password: form.password.value,
            name: form.name.value,
          })
        );
        dispatch(fistload());
        setpageSet("login");
      } else {
        alert("중복된 아이디 입니다");
      }
    }
  };

  return (
    <div className="container w-25">
      <form method="POST" action="" name="frm">
        <div className="row form-floating mb-3">
          <input className="form-control" type="text" name="userId" placeholder="id" />
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
          <input className="btn btn-outline-primary" type="button" onClick={() => makeSubmit()} value="회원가입" />
          <div className="form-text">
            이미 아이디가 있으신까요?{" "}
            <button className="btn btn-sm btn-link" type="button" onClick={() => setpageSet("login")}>
              로그인
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Regi;
