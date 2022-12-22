import { useEffect, useState } from 'react';

// 로컬스토리지 유무로 로그인 상태를 판단
const useLoginChecker = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const loginstate = !!localStorage.getItem('id');
    setIsLogin(loginstate);
  }, []);
  return [isLogin];
};

export default useLoginChecker;
