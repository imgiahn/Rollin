import React, { Dispatch, SetStateAction } from "react";

import Gifts from "../gifts/Gifts";
import AddPaperForm from "./AddPaperForm";
import AuthRouter from "../AuthRouter";
import { useNavigate } from "react-router-dom";

export interface SendProps {
  setisAdd: Dispatch<SetStateAction<boolean>>;
}
const SendBody = () => {
  const navigate = useNavigate();
  const [isSelect, setIsSelect] = React.useState(false);
  const [addType, setAddType] = React.useState("");
  const [isAdd, setisAdd] = React.useState(false);
  React.useEffect(() => {
    if (isAdd) navigate("/profile");
  }, [isAdd, navigate]);
  return (
    <>
      <AuthRouter />
      {!isSelect ? (
        <div
          className="container"
          style={{
            margin: 100,
          }}
        >
          <div id="content" className="center-block">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{
                margin: 50,
                height: 200,
              }}
              onClick={() => {
                setIsSelect(true);
                setAddType("paper");
              }}
            >
              편지쓰기
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{
                margin: 50,
                height: 200,
              }}
              onClick={() => {
                setIsSelect(true);
                setAddType("gift");
              }}
            >
              선물보내기
            </button>
          </div>
        </div>
      ) : addType === "paper" ? (
        <AddPaperForm setisAdd={setisAdd} />
      ) : (
        <Gifts setisAdd={setisAdd} />
      )}
    </>
  );
};

export default SendBody;
