
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { first, fourth, second } from '../../app/page';
import { load2 } from '../../app/paper';
import { load7 } from '../../app/users';
const Login = () => {
    const dispatch = useDispatch();

    const LoginClick = () => {
        let form = document.frm;
        if (form.userId.value === '') {
            alert('ID를 입력해 주세요');
        } else if (form.password.value === '') {
            alert('Password를 입력해 주세요');
        } else {
            dispatch(
                load7({
                    userId: form.userId.value,
                    password: form.password.value,
                })
            );
        }
    };

    return (
        <div className="container w-25">
            <form className="align-middle" method="get" name="frm" action="/main">
                <div className="row form-floating mb-3">
                    <input className="form-control" type="text" name="userId" placeholder="id" />
                    <label htmlFor="id">ID </label>
                </div>
                <div className="row form-floating mb-3">
                    <input className="form-control" type="password" name="password" placeholder="pwd" />
                    <label htmlFor="password">Password </label>
                </div>
                <div className="row">
                    <button className="btn btn-outline-primary" type="button" onClick={LoginClick}>
                        로그인
                    </button>
                    <div className="form-text">
                        아이디가 없으신가요?
                        <button className="btn btn-sm btn-link" type="button" onClick={() => dispatch(second())}>
                            회원가입
                        </button>
                    </div>
                </div>
            </form>
        </div>
<<<<<<< HEAD
    );
=======
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
>>>>>>> fd3cfa8 (선택된 Paper의 gift 호출)
};

export default Login;
