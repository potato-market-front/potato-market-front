import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/header/Header';

export default function Main() {
  return (
    <div className='container'>
      {/* header */}
      <Header />
      {/* images */}
      <StImgWrapper>
        <div className='image container'>
          <StImg src='https://dnvefa72aowie.cloudfront.net/origin/article/202212/0ECB5AA09544861676572ED085C0DA57BDCED6102D96C73DDD2D9FAADC63CC9A.jpg?q=82&s=300x300&t=crop'></StImg>
          <StContentWrapper>
            <div>내용:</div>
            <div>가격:</div>
          </StContentWrapper>
        </div>
        <div className='image container'>
          <StImg src='https://dnvefa72aowie.cloudfront.net/origin/article/202212/F4C802A00FB1B732CD39B1DE901A8D0BD5929CD3D51B3756FE7243F5ABEE6791.jpg?q=82&s=300x300&t=crop'></StImg>
          <StContentWrapper>
            <div>내용:</div>
            <div>가격:</div>
          </StContentWrapper>
        </div>
        <div className='image container'>
          <StImg src='https://dnvefa72aowie.cloudfront.net/origin/article/202212/01d957c88a7ec250747e107e221599556b5a02f4c9a891382bbf6c073f3f0881.webp?q=95&s=1440x1440&t=inside'></StImg>
          <StContentWrapper>
            <div>내용:</div>
            <div>가격:</div>
          </StContentWrapper>
        </div>
        <div className='image container'>
          <StImg src='https://dnvefa72aowie.cloudfront.net/origin/article/202212/01d957c88a7ec250747e107e221599556b5a02f4c9a891382bbf6c073f3f0881.webp?q=95&s=1440x1440&t=inside'></StImg>
          <StContentWrapper>
            <div>내용:</div>
            <div>가격:</div>
          </StContentWrapper>
        </div>
        <div className='image container'>
          <StImg src='https://dnvefa72aowie.cloudfront.net/origin/article/202212/01d957c88a7ec250747e107e221599556b5a02f4c9a891382bbf6c073f3f0881.webp?q=95&s=1440x1440&t=inside'></StImg>
          <StContentWrapper>
            <div>내용:</div>
            <div>가격:</div>
          </StContentWrapper>
        </div>
        <div className='image container'>
          <StImg src='https://dnvefa72aowie.cloudfront.net/origin/article/202212/F4C802A00FB1B732CD39B1DE901A8D0BD5929CD3D51B3756FE7243F5ABEE6791.jpg?q=82&s=300x300&t=crop'></StImg>
          <StContentWrapper>
            <div>내용:</div>
            <div>가격:</div>
          </StContentWrapper>
        </div>
      </StImgWrapper>
    </div>
  );
}

const StImgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0 20px;
  margin-top: 10px;
  margin: 0 auto;
  max-width: 600px;
`;
const StContentWrapper = styled.div`
  margin-top: 5px;
  font-size: 10px;
`;
const StImg = styled.img`
  width: 100%;
`;
