import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name:"임유정",
    comment:"안녕하세요. 유정인데요 저의 젓 컴포넌트입니당",
  },
  {
    name:"남혜민",
    comment:"우하하",
  },
  {
    name:"정서눙",
    comment: "리액트 열시미 하세용",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
        })}
      {/*<Comment name={"임유정"} comment={"안녕하세요. 유정인데용"} />
      <Comment name={"정선웅"} comment={"리액트 열시미하세여"} />*/}
    </div>
  );
}
export default CommentList;