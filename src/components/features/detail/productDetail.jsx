import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 10px;
  border: 1px solid red;
  margin: 5px;
`;
const InheritedDiv = styled(Div)`
  border: 1px solid red;
`;
function ProductDetail() {
  return (
    <Div>
      게시글 조회 ProductDetail
      <InheritedDiv>사진이 보여지는 곳</InheritedDiv>
      <div>제목: 값</div>
      <div>작성자: 값</div>
      <div>가격: 값</div>
      <div>글 내용: 값</div>
    </Div>
  );
}
export default ProductDetail;
