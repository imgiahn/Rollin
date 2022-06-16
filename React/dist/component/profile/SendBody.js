import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Gifts from "../gifts/Gifts";
import AddPaperForm from "./AddPaperForm";
import AuthRouter from "../AuthRouter";
import { useNavigate } from "react-router-dom";
const SendBody = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSelect, setIsSelect] = useState(false);
    const [addType, setAddType] = useState("");
    return (<>
      <AuthRouter />
      {!isSelect ? (<div className="container" style={{
                margin: 100,
            }}>
          <div id="content" className="center-block">
            <button type="button" className="btn btn-primary btn-lg" style={{
                margin: 50,
                height: 200,
            }} onClick={() => {
                setIsSelect(true);
                setAddType("paper");
            }}>
              편지쓰기
            </button>
            <button type="button" className="btn btn-primary btn-lg" style={{
                margin: 50,
                height: 200,
            }} onClick={() => {
                setIsSelect(true);
                setAddType("gift");
            }}>
              선물보내기
            </button>
          </div>
        </div>) : addType === "paper" ? (<AddPaperForm />) : (<Gifts />)}
    </>);
};
export default SendBody;
