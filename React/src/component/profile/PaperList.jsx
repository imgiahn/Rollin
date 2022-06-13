import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPaper } from "../../app/paper";
import { fourth } from "../../app/page";
const PapersList = () => {
  const dispatch = useDispatch();
  const papers = useSelector((state) => state.paper.paper);
  const me = useSelector((state) => state.user.me);
  return (
    <div className="container">
      <div className="row text-center">
        <h1>{me.name}님에게 온 Rollin</h1>
        <div className="row row-cols-5">
          {papers?.map((paper, index) => (
            <figure
              key={index}
              id={paper.nickName}
              className="figure col"
              onClick={(e) => {
                alert(`${e.currentTarget.id}님이 보낸 Rollin으로 이동`);
                dispatch(selectPaper({ id: paper.id, userId: paper.userId, content: paper.content, nickName: paper.nickName }));
                dispatch(fourth());
              }}
            >
              <figcaption className="figure-caption">from {paper.nickName}</figcaption>
              <img className="img-thumbnail col" alt={paper.nickName} title={paper.nickName}></img>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PapersList;
