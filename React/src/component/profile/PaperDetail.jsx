import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProfileDetail = () => {
  const selectedPaper = useSelector((state) => state.paper.selectedPaper);
  const checkGift = useSelector((state) => state.paper.selectedPaper.giftId);
  const [isGift, setIsGift] = useState(false);

  useEffect(() => {
    if (checkGift === undefined) {
      setIsGift(true);
    }
  }, [checkGift]);
  return (
    <div className="container-sm border mt-3">
      <h2>{selectedPaper.nickName}</h2>
      <textarea className="form-control" cols="60" rows="20" name="content" readOnly="readOnly">
        {selectedPaper.content}
      </textarea>
      <GiftConfirmModal isOpen={isGift} closeModal={() => setIsGift(false)} />
    </div>
  );
};

const GiftConfirmModal = ({ isOpen, closeModal }) => {
  const onSubmit = () => {
    console.log("확인");
    closeModal();
  };
  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            선물 확인
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          함께온 선물이 있습니다 <br /> 지금 확인하시겠습니까?
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            닫기
          </button>
          <button type="button" className="btn btn-primary">
            선물 확인하기
          </button>
        </div>
      </div>
    </div>
  </div>;
};

export default ProfileDetail;
