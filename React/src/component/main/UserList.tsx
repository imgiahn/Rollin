import React, { useEffect } from "react";
import { paperState, select } from "../../app/paper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import AuthRouter from "../AuthRouter";
import { userState } from "../../app/users";
const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user: userState = useSelector((state: RootState) => state.user);
  const paper: paperState = useSelector((state: RootState) => state.paper);
  const myId = localStorage.getItem("loginUser");
  // useEffect(() => {
  //   dispatch(load7());
  // }, []);
  useEffect(() => {
    //console.log(myId, selectedUser.id);
    if (paper.selectedUser !== undefined) {
      if (paper.selectedUser?.id === Number(myId)) {
        navigate("/paper");
      } else {
        navigate("/add");
      }
    }
  }, [paper.selectedUser, navigate, myId]);
  return (
    <>
      <AuthRouter />
      <div className="container ">
        <div className="row text-center">
          <h1>Rollin에 오신것을 환영합니다.</h1>
        </div>
        <div className="row row-cols-4">
          {user.users?.map((user, index) => (
            <figure key={index} className="figure">
              <figcaption className="figure-caption text-center">{user.id}</figcaption>
              <img
                className="img-thumbnail col"
                key={user.id.toFixed()}
                src={user.img}
                alt={user.name}
                id={user.id.toString()}
                title={user.userId}
                onClick={(e) => {
                  // alert(e.currentTarget.id);
                  dispatch(
                    select({
                      id: user.id,
                      name: user.name,
                      userId: user.userId,
                      img: user.img,
                    })
                  );
                }}
              />
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};
export default UserList;
