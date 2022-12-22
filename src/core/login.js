import { authInstance } from "../../core/axios";

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
    console.log(error);
    if (error.response.data.status === 400) {
      alert("옳바른 아이디나 비밀번호를 찾을 수 없습니다.");
    }
  }
};

export const idDupCheck = async (loginId) => {
  console.log("id:", loginId);
  try {
    const data = await authInstance.post("/api/auth/idDupleCheck", loginId);
    return data;
  } catch (error) {
    alert("이미 사용중인 ID 입니다.");
  }
};

export const nickDupCheck = async (nickname) => {
  try {
    const data = await authInstance.post("/api/auth/nickDupleCheck", nickname);
    return data;
  } catch (error) {
    return console.log(error);
  }
};
