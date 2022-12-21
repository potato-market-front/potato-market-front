// import React from "react";
import { authInstance } from "../../core/axios";

// const [loginId, setLoginId] = useState("");
// const [nickname, setNickname] = useState("");
// const [password, setPassword] = useState("");

export const postSignup = async ({ loginId, nickname, password }) => {
  console.log("api signup:", loginId, nickname, password);
  try {
    const data = await authInstance.post("/api/auth/signup", {
      loginId,
      nickname,
      password,
    });
    return data;
  } catch (error) {
    return console.log(error);
  }
};

export const postLogin = async ({ loginId, password }) => {
  try {
    const data = await authInstance.post("/api/auth/login", {
      loginId,
      password,
    });
    console.log(data);
    return data;
  } catch (error) {
    return console.log(error);
  }
};

export const idDupCheck = async (loginId) => {
  console.log("id:", loginId);
  try {
    const data = await authInstance.post("/api/auth/idDupleCheck", loginId);
    return data;
    // 조회되고 처리된 값이 data에 담겨오고,
  } catch (error) {
    return console.log(error);
    // alert("이미 사용중인 ID 입니다.");
  }
};

export const nickDupCheck = async (nickname) => {
  try {
    const data = await authInstance.post("/api/auth/nickDupleCheck", nickname);
    return data;
  } catch (error) {
    return console.log(error);
    // 중복 체크일 경우, 프론트에서 400에러를 받고 에러 핸들링이 필요하다.
  }
};
