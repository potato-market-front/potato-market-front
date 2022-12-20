import { authInstance } from "../../core/axios";

export const postSignup = async (post) => {
  try {
    const data = await authInstance.post("/api/auth/signup", post);
    return data;
  } catch (error) {
    return console.log(error);
  }
};

export const postLogin = async (post) => {
  try {
    const data = await authInstance.post("/api/auth/login", post);
    return data;
  } catch (error) {
    return console.log(error);
  }
};

export const idDupCheck = async (id) => {
  try {
    const data = await authInstance.post("/api/auth/idDupleCheck", id);
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
