import React from 'react';
import styled from 'styled-components';
import CommentList from '../components/features/detail/CommentList';
import ProductDetail from '../components/features/detail/ProductDetail';
import CreateComment from '../components/features/detail/CreateComment';
import { useParams } from 'react-router-dom';

const Div = styled.div`
  padding: 10px;
  border: 1px solid red;
  margin: 5px;
`;

function Detail() {
  const { productId } = useParams();
  return (
    <Div className='container'>
      <div className='header'>
        header
        <h3>상세페이지</h3>
        <Div className='상품정보및수정'>
          Main에서 선택한 게시글
          <button>(link to)게시글 수정</button>
          <ProductDetail className='게시글정보' />
        </Div>
        <div className='댓글'>
          <CreateComment className='댓글쓰는공간' />
          <CommentList className='댓글공간' />
        </div>
      </div>
    </Div>
  );
}
export default Detail;
/* 
className은 나중에 적용할 부분을 이해하기 편하도록 기입.
*/
