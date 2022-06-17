import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  insertGift,
  load,
  load2,
  load3,
  postEmail,
  selectGiftByKey,
  selectReceivers,
} from "../../app/gifts";
import { IMG_PATH } from "../../http/GiftAxios";
import { Form, Input, Button } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
const GiftDetail = () => {
  const detailGift = useSelector((state) => state.gifts.detailGift);
  const receiversInfo = useSelector((state) => state.gifts.receiversInfo);
  const receiver = useSelector((state) => state.paper.selectedUser);
  const me = useSelector((state) => state.user.me);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("receiver: ", receiver);
  const onSubmit = () => {
    console.log("onSubmit, form:", form);
    dispatch(insertGift({ ...form, giftId: detailGift.gift.id }));
    dispatch(
      postEmail({
        address: me.userId,
        title: "구매한 내역입니다",
        giftName: detailGift.gift.name,
        giftContent: detailGift.gift.content,
        giftPrice: Number(detailGift.gift.price),
        message: receiver.name + "님에게 보낸 상품 내역입니다",
      })
    );
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
    setForm({ ...form, userId: Number(value) });
  };

  const onChangeContent = (e) => {
    const { value } = e.target;
    // console.log("content:", value);
    setForm({ ...form, content: value });
  };

  const onChangeNickName = (e) => {
    const { value } = e.target;
    console.log("nickname value", value);
    setForm({ ...form, nickname: value });
  };

  return (
    <div className="GiftDetailPage container px-5 py-24 mx-auto flex flex-col">
      <div className="row text-center">
        <h1>선물 상세 페이지</h1>
      </div>
      <div className="detailGiftDesc">
        <img
          className="detailGiftImg"
          key={detailGift.gift.id}
          src={`${IMG_PATH}${detailGift.gift.img}`}
          alt={detailGift.gift.name}
        ></img>
        {detailGift.gift?.content}
      </div>
      <Form>
        닉네임 :
        <Input
          type="text"
          name="nickname"
          id="nickname"
          onChange={(e) => onChangeNickName(e)}
        ></Input>
        <br></br>
        받는사람 : {receiver.name}
        <br />
        <br />
        메시지 :
        <Input
          type="textarea"
          id="content"
          onChange={(e) => onChangeContent(e)}
        />
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
  );
};
export default GiftDetail;
