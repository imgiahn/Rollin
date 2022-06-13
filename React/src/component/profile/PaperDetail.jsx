import React from "react";
import { useSelector } from "react-redux";

const ProfileDetail = () => {
  const selectedPaper = useSelector((state) => state.paper.selectedPaper);

  return (
    <div className="container-sm border mt-3">
      <h2>{selectedPaper.nickName}</h2>
      <textarea class="form-control" cols="60" rows="20" name="content" readonly="readonly">
        {selectedPaper.content}
      </textarea>
    </div>
  );
};
export default ProfileDetail;
