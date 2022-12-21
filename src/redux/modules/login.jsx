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
    // 조회되고 처리된 값이 data에 담겨오고,
  } catch (error) {
    // alert("이미 사용중인 ID 입니다.");
    // error.response.로 찍어보면 error 객체가 잘 나온다
    // state는 따로 또 찍어서 정확한 코드를 알아내고, if문으로 에러 핸들링을 하고 ui로 추가 처리하기
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

// 리스폰스 때 에러를 인터셉트 한다.
// 첫번째 인자에 들어가는게 에러가 아니라 제대로 들어온 값이고 (변수를 넣는다), 400 이상일 경우, 두번째 파라미터로 넣는다.
//
