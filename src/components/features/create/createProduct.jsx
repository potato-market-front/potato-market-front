import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { COLORS, GRAY_COLORS } from "../../../styles/colors";

export default function CreateProduct() {
  const navigate = useNavigate();
  const onSaveHandler = () => {
    navigate("/");
  };
  return (
    <StCreateContainer>
      <StImgContainer>사진을 업로드 해주세요.</StImgContainer>
      <StInput placeholder="제목" />
      <StInput placeholder="가격" />
      <StTextarea rows={10} placeholder="글내용" />
      <StButtonWrap>
        <StButton onClick={onSaveHandler}>저장하기</StButton>
      </StButtonWrap>
    </StCreateContainer>
  );
}

const StCreateContainer = styled.section`
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

const StInput = styled.input`
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

const StButton = styled.button`
  background-color: ${COLORS.POSITIVE};
  border: 0;
  color: ${GRAY_COLORS.WHITE};
  margin: 0 auto;
  padding: 4px 8px;
`;

const StButtonWrap = styled.div`
  text-align: center;
  padding: 4px 8px;
`;
