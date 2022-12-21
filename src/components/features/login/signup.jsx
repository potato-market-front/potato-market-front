import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../common/Input";
import Button from "../../common/Button";
import {
  idDupCheck,
  nickDupCheck,
  postSignup,
} from "../../../redux/modules/login";
import TextButton from "../../common/TextButton";

function SignUp() {
  const [loginId, setLoginId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  const onSignUp = () => {
    const jsonData = { loginId, nickname, password };
    const result = JSON.stringify(jsonData);
    postSignup({
      result,
    }).then((res) => {
      localStorage.setItem("id", res.headers.authorization);
      // 어떤 변수명에 토큰 받을지 서로 얘기해야함 (res.headers...)
      //
      navigation("/login");
    });
  };

  const idDup = () => {
    console.log("id값:", loginId);
    const jsonData = { loginId: loginId };
    const result = JSON.stringify(jsonData);
    console.log("result", result);
    idDupCheck(result).then((response) => {
      console.log("data:", response.status);
      // // res로 받아왔다 idDupCheck로부터
      // console.log("data:", data.data.statusCode);
      // // const id = JSON.parse(data);
      if (response.status === 200) {
        alert("사용 가능한 ID입니다.");
        setLoginId(loginId);
      } else if (response.status === 400) {
        alert("이미 사용중인 ID입니다.");
        setLoginId("");
      }
    });
  };

  const nickDup = () => {
    const dataJson = { nickname: nickname };
    const result = JSON.stringify(dataJson);
    nickDupCheck(result).then((data) => {
      console.log("Nick 중복:", data);
      if (data.data.statusCode === 200) {
        alert("사용 가능한 Nickname입니다.");
        setNickname(nickname);
      } else {
        alert("이미 사용중인 Nickname입니다.");
        setNickname("");
      }
    });
  };

  return (
    <StTopContainer>
      <h1>감자마켓 회원가입</h1>
      <StInputGroup>
        <StInputnButton>
          <Input
            value={loginId}
            onChange={(event) => {
              setLoginId(event.target.value);
            }}
            type="text"
            name="id"
            label="ID를 입력하세요."
            width={"250px"}
          ></Input>
          <TextButton onClick={idDup}>중복확인</TextButton>
        </StInputnButton>
        <StInputnButton>
          <Input
            value={nickname}
            onChange={(event) => {
              setNickname(event.target.value);
            }}
            type="text"
            name="nick"
            label="NickName을 입력하세요."
            width={"250px"}
          ></Input>
          <TextButton onClick={nickDup}>중복확인</TextButton>
        </StInputnButton>
        <div>
          <Input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            name="password"
            label="비밀번호를 입력하세요."
            width={"250px"}
          ></Input>
        </div>
      </StInputGroup>
      <StButtonGroup>
        <div>
          <Button width={"250px"} onClick={onSignUp}>
            Sign Up
          </Button>
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

const StInputnButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  margin-left: 65px;
`;
