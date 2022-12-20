import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// TODO: 12/20 숙제
// 현재 메인화면의 이미지가 예쁘게 나오고 있지 않기 때문에 각 이미지를 예쁘게 나올수 있도록 적용해 보기
export default function Card({ id, imgSrc, title, price }) {
  return (
    <div className='image container'>
      <Link to={`/detail/${id}`}>
        <StImg src={imgSrc}></StImg>
      </Link>
      <StContentWrapper>
        <div>
          내용: <span>{title}</span>
        </div>
        <div>
          가격: <span>{price}</span>
        </div>
      </StContentWrapper>
    </div>
  );
}

const StImg = styled.img`
  width: 100%;
`;
const StContentWrapper = styled.div`
  margin-top: 5px;
  font-size: 10px;
`;
