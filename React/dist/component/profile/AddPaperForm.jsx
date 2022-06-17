import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { load2, select } from "../../app/paper";
const AddPaperForm = () => {
    const dispatch = useDispatch();
    const seleteduser = useSelector((state) => state.paper.selectedUser);
    const onClickSubmit = () => {
        let form = document.frm;
        if (form.nickname.value === "") {
            alert("제목을 입력해 주세요");
        }
        else if (form.content.value === "") {
            alert("내용을 입력해 주세요");
        }
        else {
            console.log(seleteduser.uid, form.nickname.value, form.content.value);
            dispatch(load2({
                userId: seleteduser.uid,
                nickname: form.nickname.value,
                content: form.content.value,
            }));
            //paper추가 reducer 필요 (nickname + content)
            //   dispatch(third());
        }
    };
    //textarea 높이 자동조정
    const taRef = useRef();
    const handleResizeHeight = () => {
        taRef.current.style.height = "auto";
        taRef.current.style.height = taRef.current.scrollHeight + "px";
    };
    return (<div class="container mt-5 w-75">
      <h2>{seleteduser.name}에게 Rollin 남기기</h2>
      <form name="frm" action="../bbs" method="post">
        <input type="hidden" name="param" value="writeBbsAf"/>
        <input type="hidden" id="id" name="id" className="text" value={seleteduser === null || seleteduser === void 0 ? void 0 : seleteduser.id}/>
        <div class="mb-3 form-floating">
          <input type="text" className="text form-control" size="20" name="nickname" placeholder="닉네임"/>
          <label htmlFor="nickname">닉네임</label>
        </div>
        <div className="content-wrap mb-3">
          <label htmlFor="content">내용</label>
          <textarea class="form-control" cols="60" rows="20" name="content" placeholder="여기에 내용을 입력해 주세요. " ref={taRef} onInput={handleResizeHeight}></textarea>
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-sm btn-outline-primary" onClick={onClickSubmit}>
            글작성완료
          </button>
          <Link className="btn btn-sm btn-outline-primary" to={"/profile"} onClick={() => dispatch(select({}))}>
            목록으로
          </Link>
        </div>
      </form>
    </div>);
};
{
    /* <script>
      $(document).ready(function() {
        $('.content-wrap').on( 'keyup', 'textarea', function (e){
          $(this).css('height', 'auto' );
          $(this).height( this.scrollHeight );
        });
        $('.content-wrap').find( 'textarea' ).keyup();
      });
  
  </script> */
}
export default AddPaperForm;
