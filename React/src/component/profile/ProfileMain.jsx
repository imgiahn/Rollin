// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import ProfileBody from "./ProfileBody";
// import Gifts from "../gifts/Gifts";
// import GiftDetail from "../gifts/GiftDetail";

// const ProfileMain = () => {
//   const selectedUser = useSelector((state) => state.paper.selectedUser);
//   const me = useSelector((state) => state.user.me);

//   //return <>{selectedUser?.uid === me?.uid ? <ProfileBody /> : <AddPaperForm />}</>;
//   return (
//     <>{selectedUser?.uid === me?.uid ? <ProfileBody /> : <GiftDetail />}</>
//   );
import React from "react";
import { useSelector } from "react-redux";
import ProfileBody from "./ProfileBody";
import AddPaperForm from "./AddPaperForm";
import SelectUption from "./SelectUption";
import Gifts from "../../app/gifts";

const ProfileMain = () => {
  const selectedUser = useSelector((state) => state.paper.selectedUser);
  const me = useSelector((state) => state.user.me);
  return <>{selectedUser?.uid === me?.uid ? <ProfileBody /> : <Gifts />}</>;
};

export default ProfileMain;
