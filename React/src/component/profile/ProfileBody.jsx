import React from "react";
import { useSelector } from "react-redux";
import PapersList from "./PaperList";
import PaperDetail from "./PaperDetail";
import SendBody from "./SendBody";
const ProfileBody = () => {
  const page = useSelector((state) => state.page);
  return page.fourth ? <PaperDetail /> : <SendBody />;
};
export default ProfileBody;
