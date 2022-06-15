import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fifth } from "../../app/page";
import Gifts from "../gifts/Gifts";
import AddPaperForm from "./AddPaperForm";

const SendBody = () => {
  const dispatch = useDispatch();
  const [isSelet, setIsSelet] = useState(false);
  const page = useSelector((state) => state.page);
  return !isSelet ? (
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
            setIsSelet(true);
            dispatch(fifth("add"));
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
            setIsSelet(true);
            dispatch(fifth("addGift"));
          }}
        >
          선물보내기
        </button>
      </div>
    </div>
  ) : page.fifth === "add" ? (
    <AddPaperForm />
  ) : (
    <Gifts />
  );
};

export default SendBody;
