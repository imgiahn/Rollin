import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertGift, selectGiftByKey, selectReceivers } from "../../app/gifts";
import { IMG_PATH } from "../../http/GiftAxios";
import { Form, Input, Button } from "reactstrap";
const GiftDetail = () => {
  const detailGift = useSelector((state) => state.gifts.detailGift);
  const receiversInfo = useSelector((state) => state.gifts.receiversInfo);

  const dispatch = useDispatch();
  const getGiftDetil = () => {
    dispatch(selectGiftByKey());
  };

  const getReceiverNames = () => {
    dispatch(selectReceivers());
  };

  const onSubmit = () => {
    dispatch(insertGift(form));
  };

  const [form, setForm] = useState({
    receiverId: undefined,
    content: "",
  });

  const onChangeSelect = (e) => {
    const { value } = e.target;
    setForm({ ...form, receiverId: Number(value) });
  };

  const onChangeContent = (e) => {
    const { value } = e.target;
    // console.log("content:", value);
    setForm({ ...form, content: value });
  };

  useEffect(() => {
    getGiftDetil();
    getReceiverNames();
  }, []);

  return (
    <div className="GiftDetailPage">
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
        {detailGift.gift.content}
      </div>
      <Form>
        {/* 로그인한 아이디 빼고 모든 user name 가져오기*/}
        받는사람 :
        <Input
          type="select"
          name="receiver"
          id="receiverSelect"
          onChange={(e) => onChangeSelect(e)}
        >
          {receiversInfo.receivers?.map((receiver, index) => (
            <option value={receiver.id}>{receiver.name}</option>
          ))}
        </Input>
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
      </Form>
    </div>
  );
};
export default GiftDetail;
