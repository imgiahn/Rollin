import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertGift } from "../../app/gifts";
import { IMG_PATH } from "../../http/GiftAxios";
import { Form, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
const GiftDetail = () => {
    var _a, _b;
    const detailGift = useSelector((state) => state.gifts.detailGift);
    const receiversInfo = useSelector((state) => state.gifts.receiversInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = () => {
        console.log("onSubmit, form:", form);
        dispatch(insertGift(Object.assign(Object.assign({}, form), { giftId: detailGift.gift.id })));
        navigate("/profile");
    };
    const [form, setForm] = useState({
        nickname: "",
        userId: 0,
        content: "",
    });
    const onChangeSelect = (e) => {
        const { value } = e.target;
        console.log("onChangeSelect, e.target.value:", value);
        setForm(Object.assign(Object.assign({}, form), { userId: Number(value) }));
    };
    const onChangeContent = (e) => {
        const { value } = e.target;
        // console.log("content:", value);
        setForm(Object.assign(Object.assign({}, form), { content: value }));
    };
    const onChangeNickName = (e) => {
        const { value } = e.target;
        console.log("nickname value", value);
        setForm(Object.assign(Object.assign({}, form), { nickname: value }));
    };
    return (React.createElement("div", { className: "GiftDetailPage" },
        React.createElement("div", { className: "row text-center" },
            React.createElement("h1", null, "\uC120\uBB3C \uC0C1\uC138 \uD398\uC774\uC9C0")),
        React.createElement("div", { className: "detailGiftDesc" },
            React.createElement("img", { className: "detailGiftImg", key: detailGift.gift.id, src: `${IMG_PATH}${detailGift.gift.img}`, alt: detailGift.gift.name }), (_a = detailGift.gift) === null || _a === void 0 ? void 0 :
            _a.content),
        React.createElement(Form, null,
            "\uB2C9\uB124\uC784 :",
            React.createElement(Input, { type: "text", name: "nickname", id: "nickname", onChange: (e) => onChangeNickName(e) }),
            React.createElement("br", null),
            "\uBC1B\uB294\uC0AC\uB78C :",
            React.createElement(Input, { type: "select", name: "receiver", id: "receiverSelect", onChange: (e) => onChangeSelect(e) },
                React.createElement("option", { value: "" }, "\uBC1B\uB294 \uC0AC\uB78C"), (_b = receiversInfo.receivers) === null || _b === void 0 ? void 0 :
                _b.map((receiver, index) => (React.createElement("option", { value: receiver.id }, receiver.name)))),
            React.createElement("br", null),
            "\uBA54\uC2DC\uC9C0 :",
            React.createElement(Input, { type: "textarea", id: "content", onChange: (e) => onChangeContent(e) }),
            React.createElement("br", null),
            React.createElement(Button, { color: "info", onClick: onSubmit }, "\uC120\uBB3C\uD558\uAE30"),
            React.createElement(Button, { color: "info", onClick: () => {
                    navigate("/add");
                } }, "\uCDE8\uC18C"))));
};
export default GiftDetail;
