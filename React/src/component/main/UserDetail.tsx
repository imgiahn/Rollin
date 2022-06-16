import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { user } from "../../app/users";
const UserDetail = () => {
  const selectedUser: user = useSelector((state: RootState) => state.paper.selectedUser);
  return (
    <div>
      <img src={selectedUser.img} alt={selectedUser.name}></img>
      <table>
        <tr>
          <th>이름</th>
          <th>아이디</th>
        </tr>
        <tr>
          <td>{selectedUser.name}</td>
          <td>{selectedUser.id}</td>
        </tr>
      </table>
    </div>
  );
};

export default UserDetail;
