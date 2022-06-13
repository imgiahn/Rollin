import React from "react";
import { useSelector } from "react-redux";
import PapersList from "./PaperList";
import PaperDetail from "./PaperDetail";
const ProfileBody = () => {
  const page = useSelector((state) => state.page);
  return page.fourth ? <PaperDetail /> : <PapersList />;
};
export default ProfileBody;
