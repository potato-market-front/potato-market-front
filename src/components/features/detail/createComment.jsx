import React, { useState } from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import { addComment } from "..../redux/modules/commentsSlice"

const Div = styled.div`
  padding: 10px;
  border: 1px solid red;xw
  margin: 5px;
`;

function CreateComment() {
  const dispatch = useDispatch();
  const [comment, setComment] = useState({
    content: "",
  }); //1
  console.log(Comment); //1

  const {id} =useParams();

  const onCreateCommentHandler = (event) => {
    event.preventDefault();
    dispatch(addComment({ productId: id, ...comment }));
    setComment({
      content: "",
    });
  };

  return (
    <Div>
      댓글 쓰는 공간
      <form>
        <input
          placeholder="댓글 쓰기"
          name="comment"
          onChange={(e) => setComment(e.target.value)} //1
        />
        <button type="submit" onClcik={onCreateCommentHandler}>
          댓글 달기(post)
        </button>
      </form>
    </Div>
  );
}
export default CreateComment;
/*
댓글 폼 작성순서
1.변수값이 나오는 comment에 state 선언, 인풋값에 state 넣기, 콘솔에 찍어보기 - ✅
2.Create핸들러 만들기 위해 commentsSlice 만들기 // commentsSlice.js
3.axios import, 서버에 통신하기 위해 핸들러에 axios통신을 통해 post를 한다.

*/