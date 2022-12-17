import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../common/Input";

function CreateReply() {
  const [reply, setRely] = useState("");

  return (
    <StTopContainer>
      <StInputGroup>
        <Input
          type="text"
          name="comment"
          width={"400px"}
          label={"답글달기"}
        ></Input>
        <StButtonGroup>
          <StButton>등록</StButton>
        </StButtonGroup>
      </StInputGroup>
    </StTopContainer>
  );
}

export default CreateReply;

const StTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 50px;
`;

const StInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const StButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 20px;
`;

const StButton = styled.button`
  width: 30px;
  height: 15px;
  border: none;
  font-size: 12px;
  background-color: transparent;
  color: #285430;
  cursor: pointer;
  text-decoration: underline;
  font-family: Diary;
`;
