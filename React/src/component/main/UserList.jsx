import React, { useEffect } from "react";
import { third } from "../../app/page";
import { select } from "../../app/paper";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../app/gifts";
const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  
  return (
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
              key={user.uid}
              src={user.img}
              alt={user.name}
              id={user.uid}
              title={user.id}
              onClick={(e) => {
                alert(e.currentTarget.id);
                dispatch(
                  select({
                    uid: user.uid,
                    name: user.name,
                    id: user.id,
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
  );
};
export default UserList;
