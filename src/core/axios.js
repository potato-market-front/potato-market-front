import axios from "axios";

export const authInstance = axios.create({
  baseURL: "http://3.35.218.111",
  // baseURL: "http://localhost:3001",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // headers: {
  //   // "Access-Control-Allow-Origin": "*",
  // },
});

authInstance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});

export const resInterceptor = (response) => {
  // request할 때 요청을 가로채고 핸들하는 인터셉터말고 요청을 받을 때 가로채서 핸들링하는 인터셉터도 있음
  // 이번에 사용한 케이스는 토큰 만료됐다는 응답을 서버가 프론트로 보낼때 사용
  return response;
};

const errorInterceptor = (error) => {
  if (error.response.status === 401) {
    window.location.replace("/login");
    alert("로그인 기간이 만료되었습니다. 다시 로그인 해주세요.");
    localStorage.clear();
  }

  return Promise.reject(error);
};

authInstance.interceptors.response.use(resInterceptor, errorInterceptor);

// token이 넘어오면 그걸 받아서 토큰을 받으면 프론트에서 관리를 한다 - 어딘가에 저장한다.
// 보통 웹스토리지에 저장 (로컬스토리지, 세션스토리지)
// 저장하고 필요할때마다 갖고와서 사용한다.

// 인스턴스에서 제공하는 메소드가 있다 (Interceptor request)
// api 요청을 보낼 때 중간에 잡아서 공통적으로 실행하고싶은 로직을 실행한다.
// 그냥 공통적으로 다 토큰을 보낸다 request header에 담아서 보낸다.

// 리퀘스터 사용법이랑 토큰 헤더에 담아서 보내는법 검색해보기

// 헤더엔 저장된 토큰값을 헤더에 실어서 보낸다.
