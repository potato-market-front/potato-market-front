import React from 'react';
import styled from 'styled-components';

export default function Main() {
  return (
    <div className='container'>
      {/* header */}
      <header className='header'>
        <h1>메인페이지</h1>
      </header>
      {/* images */}
      <StImgWrapper>
        <div className='image container'>
          <StImg src='https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/166893084493933827.jpg?w=2048&h=1280&c=c'></StImg>
        </div>
        <div className='image container'>
          <StImg src='https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/166893084493933827.jpg?w=2048&h=1280&c=c'></StImg>
        </div>
        <div className='image container'>
          <StImg src='https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/166893084493933827.jpg?w=2048&h=1280&c=c'></StImg>
        </div>
      </StImgWrapper>
    </div>
  );
}

const StImgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0 20px;
`;
const StImg = styled.img`
  width: 100%;
`;
