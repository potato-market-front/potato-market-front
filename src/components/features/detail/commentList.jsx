import React from 'react';
import styled from 'styled-components';
import ReplyList from './ReplyList';
import UpdateComment from './UpdateComment';
import CreateReply from './CreateReply';
import { useParams } from "react-router-dom";

const Div = styled.div`
  padding: 10px;
  border: 1px solid red;
  margin: 5px;
`;
const InheritedDiv = styled(Div)`
  border: 1px solid red;
`;
function CommentList() {
  const {id} = useParams();
  return (
    <Div>
      댓글 공간 CommentList
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
