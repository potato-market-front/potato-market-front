import React from "react";
import styled from "styled-components";
import Detail from "../../../pages/Detail";
import Input from "../../common/Input";
import Button from "../../common/Button";

function UpdateReply() {
  return (
    <StTopContainer>
      <Detail />
      <StInputGroup>
        <Input
          type="text"
          name="comment"
          label="답글 달기"
          width={"400px"}
        ></Input>
      </StInputGroup>
      <StButtonGroup>
        <div>
          <Button>등록</Button>
        </div>
        <div>
          <Button color={"#F4EAD5"}>취소</Button>
        </div>
      </StButtonGroup>
    </StTopContainer>
  );
}

export default UpdateReply;

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

  gap: 30px;
`;

const StButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto;
  gap: 20px;
`;
