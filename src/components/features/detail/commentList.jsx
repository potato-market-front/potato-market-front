import React from "react";
import styled from "styled-components";
import ReplyList from "../detail/replyList";
import UpdateComment from "./updateComment";
import CreateReply from "./createReply";

const Div = styled.div`
  padding: 10px;
  border: 1px solid red;
  margin: 5px;
`;
const InheritedDiv = styled(Div)`
  border: 1px solid red;
`;
function CommentList() {
  return (
    <Div>
      댓글 공간
      <InheritedDiv>
        쓰여진 댓글
        <UpdateComment />
        <button>삭제</button>
        <CreateReply />
        <ReplyList />
      </InheritedDiv>
    </Div>
  );
}
export default CommentList;
