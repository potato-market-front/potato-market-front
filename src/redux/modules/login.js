import { authInstance } from "../../core/axios";

export const postSignup = async (result) => {
  console.log("api signup:", result);
  try {
    const data = await authInstance.post("/api/auth/signup", result);
    return data;
  } catch (error) {
    return console.log(error);
  }
};

export const postLogin = async (result) => {
  try {
    const data = await authInstance.post("/api/auth/login", result);
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
    console.log("try");
    return data;
    // 조회되고 처리된 값이 data에 담겨오고,
  } catch (error) {
    return console.log(error);
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
