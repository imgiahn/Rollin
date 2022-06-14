import React from "react";
import { useSelector } from "react-redux";
import ProfileBody from "./ProfileBody";
import AddPaperForm from "./AddPaperForm";
import SearchBar from "../Search/SearchBar";
import Gifts from "../gifts/Gifts";

const ProfileMain = () => {
  const selectedUser = useSelector((state) => state.paper.selectedUser);
  const me = useSelector((state) => state.user.me);
  //return <>{selectedUser?.uid === me?.uid ? <ProfileBody /> : <AddPaperForm />}</>;
  return <>{selectedUser?.uid === me?.uid ? <ProfileBody /> : <Gifts />}</>;
};

export default ProfileMain;
