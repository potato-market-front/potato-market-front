import React from 'react';
import styled from 'styled-components';
import ReplyList from './ReplyList';
import UpdateComment from './UpdateComment';
import CreateReply from './CreateReply';

function CommentList() {
  return (
    <div>
      댓글 공간 CommentList
      <div>
        쓰여진 댓글
        <UpdateComment />
        <button>삭제</button>
        <CreateReply />
        <ReplyList />
      </div>
    </div>
  );
}
export default CommentList;
