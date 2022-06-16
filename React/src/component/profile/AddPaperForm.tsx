import React, { FunctionComponent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { load2, select } from "../../app/paper";
import { RootState } from "../../app/store";
import { SendProps } from "./SendBody";

const AddPaperForm: FunctionComponent<SendProps> = (props: SendProps) => {
  const dispatch = useDispatch();
  const seleteduser = useSelector((state: RootState) => state.paper.selectedUser);

  const onClickSubmit = () => {
    let form = document.forms[0];
    if (form.nickname.value === "") {
      alert("제목을 입력해 주세요");
    } else if (form.content.value === "") {
      alert("내용을 입력해 주세요");
    } else {
      console.log(seleteduser.id, form.nickname.value, form.content.value);
      dispatch(
        load2({
          userId: seleteduser.id,
          nickname: form.nickname.value,
          content: form.content.value,
        })
      );
      props.setisAdd(true);
      //paper추가 reducer 필요 (nickname + content)
      //   dispatch(third());
    }
  };
  //textarea 높이 자동조정
  const taRef = useRef<HTMLTextAreaElement>();
  const handleResizeHeight = () => {
    taRef.current.style.height = "auto";
    taRef.current.style.height = taRef.current.scrollHeight + "px";
  };
  return (
    <div className="container mt-5 w-75">
      <h2>{seleteduser.name}에게 Rollin 남기기</h2>
      <form name="frm" action="../bbs" method="post">
        <input type="hidden" name="param" value="writeBbsAf" />
        <input type="hidden" id="id" name="id" className="text" value={seleteduser?.id} />
        <div className="mb-3 form-floating">
          <input type="text" className="text form-control" size={20} name="nickname" placeholder="닉네임" />
          <label htmlFor="nickname">닉네임</label>
        </div>
        <div className="content-wrap mb-3">
          <label htmlFor="content">내용</label>
          <textarea
            className="form-control"
            cols={60}
            rows={20}
            name="content"
            placeholder="여기에 내용을 입력해 주세요. "
            ref={taRef}
            onInput={handleResizeHeight}
          ></textarea>
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-sm btn-outline-primary" onClick={onClickSubmit}>
            글작성완료
          </button>
          <Link className="btn btn-sm btn-outline-primary" to={"/profile"} onClick={() => dispatch(select())}>
            목록으로
          </Link>
        </div>
      </form>
    </div>
  );
};
export default AddPaperForm;
