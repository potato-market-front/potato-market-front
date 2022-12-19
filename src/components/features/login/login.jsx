import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Input from "../../common/Input";

function Login() {
  return (
    <StTopContainer>
      <h1>감자마켓</h1>
      <h3>감사히 자-알 쓰겠습니다!</h3>
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
            type="password"
            name="password"
            label="비밀번호를 입력하세요."
            width={"250px"}
          ></Input>
        </div>
      </StInputGroup>
      <StButtonGroup>
        <div>
          <Button width={"250px"}>Login</Button>
        </div>
        <StLink>
          <Link to="/signup">
            Don't have an account? Please{" "}
            <span style={{ fontWeight: "bold" }}>Sign Up.</span>
          </Link>
        </StLink>
      </StButtonGroup>
    </StTopContainer>
  );
}

export default Login;

const StTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

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
