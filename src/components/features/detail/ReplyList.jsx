import React, { useState } from 'react';
import styled from 'styled-components';

import SmallButton from '../../common/SmallButton';

import { useParams } from 'react-router-dom';
import { COLORS } from '../../../styles/colors';
import axios from 'axios';
import CommentItem from './CommentItem';
import TextButton from '../../common/TextButton';

function ReplyList({ detailProduct }) {
  const { id, nickname, content, createdAt, commentList } = detailProduct;
  const [comment, setComment] = useState('');

  const { productId } = useParams();
  console.log('replylist', detailProduct);

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const createComment = () => {
    axios.post(
      `http://3.35.218.111/api/products/${productId}/comments/${productId}`,
      { comment: comment }
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (comment === '') {
      alert('답글 내용을 입력해주세요.');
    }
    try {
      createComment();
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <StInputForm onSubmit={onSubmit}>
        <StInput placeholder='댓글쓰기' onChange={onChangeHandler} />
        <StButtonsWrap>
          <TextButton onClick={onSubmit}>Comment</TextButton>
        </StButtonsWrap>
      </StInputForm>
      Comments
      {/* 없을경우 에러 핸들링 */}
      {commentList &&
        commentList.map((v) => (
          <CommentItem
            key={v.id}
            commentId={v.id}
            content={v.content}
            nickName={v.nickname}
            createdAt={v.createdAt}
          />
        ))}
    </div>
  );
}

export default ReplyList;

const StInputForm = styled.form`
  border-style: solid;
  border-width: 1px;
  border-color: #dae2b6;
  padding: 10px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
`;

const StInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 8px;
  margin: 16px 0px;
  border: transparent;
  &:focus {
    outline: none;
  }
`;
const StButtonsWrap = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
