import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../../common/Input";
import Button from "../../common/Button";

function SignUp() {
  return (
    <StTopContainer>
      <h1>감자마켓 회원가입</h1>
      <StInputGroup>
        <div>
          <Input
            type="text"
            name="id"
            label="ID를 입력하세요."
            width={"250px"}
          ></Input>
        </div>
        <div>
          <Input
            type="text"
            name="nick"
            label="NickName을 입력하세요."
            width={"250px"}
          ></Input>
        </div>
        <div>
          <Input
            type="password"
            name="password"
            label="비밀번호를 입력하세요."
            width={"250px"}
          ></Input>
        </div>
        <div>
          <Input
            type="password"
            name="confirm"
            label="비밀번호를 확인해주세요."
            width={"250px"}
          ></Input>
        </div>
      </StInputGroup>
      <StButtonGroup>
        <div>
          <Button width={"250px"}>Sign Up</Button>
        </div>
        <StLink>
          <Link to="/login">
            Already a member? Please{" "}
            <span style={{ fontWeight: "bold" }}>Login.</span>
          </Link>
        </StLink>
      </StButtonGroup>
    </StTopContainer>
  );
}

export default SignUp;

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

const StLink = styled.div`
  a {
    font-weight: 400;
    text-decoration: none;
    color: #4d4f50;
  }
`;
