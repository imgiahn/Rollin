import React, { useEffect } from "react";
import { third } from "../../app/page";
import { getSeletedUsersPapers, select } from "../../app/paper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthRouter from "../AuthRouter";
const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.users);
  const selectedUser = useSelector((state) => state.paper.selectedUser);
  const myId = localStorage.getItem("loginUser");

  // useEffect(() => {
  //   dispatch(load7());
  // }, []);
  useEffect(() => {
    if (Object.keys(selectedUser).length !== 0) {
      console.log(myId, selectedUser.id);
      if (selectedUser.id === Number(myId)) {
        navigate("/paper");
      } else {
        navigate("/add");
      }
    }
  }, [selectedUser, navigate, myId]);
  return (
    <>
      <AuthRouter />
      <div className="container ">
        <div className="row text-center">
          <h1>Rollin에 오신것을 환영합니다.</h1>
        </div>
        <div className="row row-cols-4">
          {users?.map((user, index) => (
            <figure key={index} className="figure">
              <figcaption className="figure-caption text-center">{user.id}</figcaption>
              <img
                className="img-thumbnail col"
                key={user.id}
                src={user.img}
                alt={user.name}
                id={user.id}
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
                  dispatch(third());
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
