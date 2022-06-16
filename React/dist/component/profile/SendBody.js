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
    return (React.createElement(React.Fragment, null,
        React.createElement(AuthRouter, null),
        !isSelect ? (React.createElement("div", { className: "container", style: {
                margin: 100,
            } },
            React.createElement("div", { id: "content", className: "center-block" },
                React.createElement("button", { type: "button", className: "btn btn-primary btn-lg", style: {
                        margin: 50,
                        height: 200,
                    }, onClick: () => {
                        setIsSelect(true);
                        setAddType("paper");
                    } }, "\uD3B8\uC9C0\uC4F0\uAE30"),
                React.createElement("button", { type: "button", className: "btn btn-primary btn-lg", style: {
                        margin: 50,
                        height: 200,
                    }, onClick: () => {
                        setIsSelect(true);
                        setAddType("gift");
                    } }, "\uC120\uBB3C\uBCF4\uB0B4\uAE30")))) : addType === "paper" ? (React.createElement(AddPaperForm, null)) : (React.createElement(Gifts, null))));
};
export default SendBody;
