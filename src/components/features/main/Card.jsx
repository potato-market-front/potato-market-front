import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  width: 186px;
  height: 186px;
  object-fit: cover;
`;
const StContentWrapper = styled.div`
  margin-top: 5px;
  font-size: 10px;
`;
