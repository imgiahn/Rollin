import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "./UserList";
import ProfileMain from "../profile/ProfileMain";
const Main = () => {
  const paper = useSelector((state) => state.paper);
  const page = useSelector((state) => state.page);

  return <div>{page.third ? <ProfileMain /> : <UserList />}</div>;
};

export default Main;
