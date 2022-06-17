import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertGift } from "../../app/gifts";
import { IMG_PATH } from "../../http/GiftAxios";
import { Form, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import "../front/gi.css";
const GiftDetail = () => {
    const detailGift = useSelector((state: RootState) => state.gifts.detailGift);
    const receiversInfo = useSelector((state: RootState) => state.gifts.receiversInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = () => {
        console.log("onSubmit, form:", form);
        dispatch(insertGift({ ...form, id: detailGift.gift.id }));
        navigate("/profile");
    };

    const [form, setForm] = useState({
        nickname: "",
        userId: 0,
        content: "",
    });

    const onChangeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        console.log("onChangeSelect, e.target.value:", value);
        setForm({ ...form, userId: Number(value) });
    };

    const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        // console.log("content:", value);
        setForm({ ...form, content: value });
    };

    const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        console.log("nickname value", value);
        setForm({ ...form, nickname: value });
    };

    return (
        <div className="App">
            <div>
                <div className="row text-center">
                    <h1>선물 상세 페이지</h1>
                </div>
                <div className="detailGiftDesc">
                    <img
                        className="detailGiftImg"
                        key={detailGift.gift?.id}
                        src={`${IMG_PATH}${detailGift.gift?.img}`}
                        alt={detailGift.gift?.name}
                    ></img>
                    {detailGift.gift?.content}
                </div>
                <Form>
                    닉네임 <Input type="text" name="nickname" id="nickname" onChange={(e) => onChangeNickName(e)}></Input>
                    <br></br>
                    받는사람
                    <Input type="select" name="receiver" id="receiverSelect" onChange={(e) => onChangeSelect(e)}>
                        <option value="">받는 사람</option>
                        {receiversInfo.receivers?.map((receiver, index) => (
                            <option value={receiver.id}>{receiver.name}</option>
                        ))}
                    </Input>
                    <br />
                    메시지
                    <Input type="textarea" id="content" onChange={(e) => onChangeContent(e)} />
                    <br />
                    <Button color="info" onClick={onSubmit}>
                        선물하기
                    </Button>
                    <Button
                        color="info"
                        onClick={() => {
                            navigate("/add");
                        }}
                    >
                        취소
                    </Button>
                </Form>
            </div>
        </div>
    );
};
export default GiftDetail;
