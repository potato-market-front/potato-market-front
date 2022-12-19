import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { postComment } from "../../../redux/modules/commentsSlice";

const Div = styled.div`
  padding: 10px;
  border: 1px solid red;
  margin: 5px;
`;

function CreateComment() {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(); //대괄호안 중괄호까지가 initial state가 문제
  // console.log(comment); //1

  const { id } = useParams();

  const onCreateCommentHandler = (event) => {
    event.preventDefault();
    dispatch(postComment({ productId: id, content: comment }));
    setComment();
  };
  //setComment 대신에 함수를 넣어서
  //바뀌여야 할 필요. state로 값을 관리하는 이유는 입력값이 변할때마다 바뀌는값만 렌더링하기 위해 useState를 관리한다.
  //관리하는 아이들을 통해 온체인지를 통해 핸들러 및 렌더링이 실행.
  //스테이트값을 디스패치(함수로 보내기위해) 해주기 위함, 그래서 스테이트를 관리한다.
  //관리한 아이들은 디스패치해서 보낼때, 따로 comment(객체)를 만들어서 보낼수있다.
  //보낼때, comment라고 하는 useState로 관리되는..'content'라는 키값을 만들고,
  //comment의 값을 value값으로 만들어서 보낸다면, 원하는 객체값을 보낼수있다.

  //수정부분, useState의 initial state에 content:"" remove,
  //setComment안에도 content, remove.
  //코드방향. 그리고 값을 비우기 위해 setComment을 썻는데, 빈값을 보내면 된다.
  //content는 키, comment는 키값
  //실제로 원하는 값이 바뀌고 있는지,
  //콘솔로그!를 하나하나 찍어보며, 데이터흐름!을 확인하며, 원하는 값을 찾아가자.
  //다른방법은 무엇이 있을까? 궁금해하며 시도해보기.

  return (
    <Div>
      댓글 쓰는 공간
      <form onSubmit={onCreateCommentHandler}>
        <input
          placeholder="댓글 쓰기"
          name="comment"
          onChange={(e) => setComment(e.target.value)} //1
        />
        <button type="submit" onClick={onCreateCommentHandler}>
          댓글 달기
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
//기능을 구현하려 했는지, 에러가 났을때, 찾아보고 왜 에러가 났는지 가정을 세워보고,
//가정대로 해결되면 해결하고, 가정과 다르게 15분이상 해결이 안되면 팀원들과 고민해보고,
//그이후에는 멘토에게 디엠보내보고, 또는 질문방에 올려보도록하자.
*/
