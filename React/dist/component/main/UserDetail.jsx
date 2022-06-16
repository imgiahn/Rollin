import React from "react";
import { useSelector } from "react-redux";
const UserDetail = () => {
    const selectedUser = useSelector((state) => state.paper.selectedUser);
    return (<div>
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
    </div>);
};
export default UserDetail;
