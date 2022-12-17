import React from 'react';
import styled from 'styled-components';
// import { Link } from "react-router-dom";
// import Button from "../../common/Button";
// import Input from "../../common/Input";
import CommentList from '../detail/commentList';
import ProductDetail from '../detail/productDetail';
import CreateComment from '../detail/createComment';

export default function UpdateProduct() {
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

// const StTopContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   gap: 50px;
// `;

// const StInputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: auto;

//   gap: 30px;
//   width: 250px;
// `;

// const StButtonGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   margin: auto;
//   gap: 20px;
// `;

// const StLink = styled.div`
//   a {
//     font-weight: 400;
//     text-decoration: none;
//     color: #4d4f50;
//   }
// `;

const Div = styled.div`
  padding: 10px;
  border: 1px solid red;
  margin: 5px;
`;
