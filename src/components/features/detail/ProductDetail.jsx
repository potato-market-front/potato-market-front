import React from 'react';
import styled from 'styled-components';
import { COLORS, GRAY_COLORS } from '../../../styles/colors';

export default function ProductDetail() {
  return (
    <StDetilProductContainer>
      <StImgContainer>사진</StImgContainer>
      <StSpan>제목</StSpan>
      <StSpan>가격</StSpan>
      <StTextarea>글내용</StTextarea>
    </StDetilProductContainer>
  );
}

const StDetilProductContainer = styled.section`
  width: 320px;
  margin: 0 auto;
`;
const StImgContainer = styled.div`
  width: 100%;
  height: 160px;
  text-align: center;
  border: 1px ${COLORS.POSITIVE} solid;
  color: ${COLORS.POINT};
  border-radius: 8px;
  margin-bottom: 16px;
`;
const StSpan = styled.span`
  display: block;
  width: 100%;
  padding: 4px 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: gray solid 0.5px;
`;
const StTextarea = styled.textarea`
  width: 100%;
  padding: 4px 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: ${GRAY_COLORS.GRAYD} solid 0.5px;
`;
