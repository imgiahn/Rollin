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
    return (React.createElement("div", { class: "container mt-5 w-75" },
        React.createElement("h2", null,
            seleteduser.name,
            "\uC5D0\uAC8C Rollin \uB0A8\uAE30\uAE30"),
        React.createElement("form", { name: "frm", action: "../bbs", method: "post" },
            React.createElement("input", { type: "hidden", name: "param", value: "writeBbsAf" }),
            React.createElement("input", { type: "hidden", id: "id", name: "id", className: "text", value: seleteduser === null || seleteduser === void 0 ? void 0 : seleteduser.id }),
            React.createElement("div", { class: "mb-3 form-floating" },
                React.createElement("input", { type: "text", className: "text form-control", size: "20", name: "nickname", placeholder: "\uB2C9\uB124\uC784" }),
                React.createElement("label", { htmlFor: "nickname" }, "\uB2C9\uB124\uC784")),
            React.createElement("div", { className: "content-wrap mb-3" },
                React.createElement("label", { htmlFor: "content" }, "\uB0B4\uC6A9"),
                React.createElement("textarea", { class: "form-control", cols: "60", rows: "20", name: "content", placeholder: "\uC5EC\uAE30\uC5D0 \uB0B4\uC6A9\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694. ", ref: taRef, onInput: handleResizeHeight })),
            React.createElement("div", { className: "mb-3" },
                React.createElement("button", { type: "button", className: "btn btn-sm btn-outline-primary", onClick: onClickSubmit }, "\uAE00\uC791\uC131\uC644\uB8CC"),
                React.createElement(Link, { className: "btn btn-sm btn-outline-primary", to: "/profile", onClick: () => dispatch(select({})) }, "\uBAA9\uB85D\uC73C\uB85C")))));
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
