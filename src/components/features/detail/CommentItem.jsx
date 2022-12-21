import TextButton from '../../common/TextButton';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function CommentItem(props) {
  const { commentId, content, createdAt, nickName } = props;
  // type : none, edit
  const [commentType, setCommentType] = useState('none');
  const [comment, setComment] = useState('');

  // axios 통신
  const updateComment = async () => {
    try {
      await axios.post(
        `http://3.35.218.111/api/products/comments/${commentId}`,
        {
          comment: comment,
        }
      );
    } catch (error) {
      throw error;
    }
  };

  const deleteComment = async () => {
    try {
      await axios.delete(
        `http://3.35.218.111/api/products/comments/${commentId}`
      );
    } catch (error) {
      throw error;
    }
  };

  // onClick 함수

  const onEditComment = () => {
    if (commentType === 'none') {
      setCommentType('edit');
    }
    if (commentType === 'edit') {
      setCommentType('none');
    }
  };

  const onEditSubmit = () => {
    updateComment();
    setCommentType('none');
  };

  const onDeleteComment = () => {
    deleteComment();
  };

  // onChange 함수
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <StCommentItem>
      {commentType === 'edit' ? (
        <StInput placeholder='댓글 수정 중...' onChange={onChangeHandler} />
      ) : (
        <>
          <StCommentWrap>{content}</StCommentWrap>
          <div>{nickName}</div>
        </>
      )}

      <StButtonsWrap>
        <TextButton margin={'5px'} onClick={onDeleteComment}>
          삭제
        </TextButton>
        {commentType === 'none' ? (
          <TextButton onClick={onEditComment}>수정</TextButton>
        ) : (
          <TextButton onClick={onEditSubmit}>완료</TextButton>
        )}
      </StButtonsWrap>
    </StCommentItem>
  );
}

const StCommentItem = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: #dae2b6;
  padding: 10px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
`;

const StCommentWrap = styled.div`
  padding: 10px;
  font-size: 14px;
`;
const StButtonsWrap = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
