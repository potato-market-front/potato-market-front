import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Card({ imgSrc, title, price }) {
  return (
    <Link to='/create'>
      <div className='image container'>
        <StImg src={imgSrc}></StImg>
        <StContentWrapper>
          <div>
            내용: <span>{title}</span>
          </div>
          <div>
            가격: <span>{price}</span>
          </div>
        </StContentWrapper>
      </div>
    </Link>
  );
}

const StImg = styled.img`
  width: 100%;
`;
const StContentWrapper = styled.div`
  margin-top: 5px;
  font-size: 10px;
`;
