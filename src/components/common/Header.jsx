import styled from 'styled-components';
import { useState } from 'react';
import { COLORS } from '../../styles/colors';
import Logo from '../../assets/png/potato.png';
import { Link } from 'react-router-dom';
import { Pencil } from '../../assets/svg';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  // TODO: redux에서 로그인 상태 관리하기
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const onClickCreateHandler = () => {
    navigate('/create');
  };

  const onClickLogInHandler = () => {
    navigate('/login');
  };
  const onClickSignUpeHandler = () => {
    navigate('/signup');
  };

  return (
    <StHeader>
      <StIconWrap>
        <Link to='/'>
          <img alt='logo' src={Logo} width='40px' />
        </Link>
        <StLogo>감자마-켓</StLogo>
      </StIconWrap>
      <StButtonWrap>
        <StHeaderButton onClick={onClickCreateHandler}>
          <StWriteSpan>작성하기</StWriteSpan>
          <Pencil />
        </StHeaderButton>
        {isLogin ? (
          <StHeaderButton>로그아웃</StHeaderButton>
        ) : (
          <StHeaderButton onClick={onClickLogInHandler}>로그인</StHeaderButton>
        )}
        <StHeaderButton onClick={onClickSignUpeHandler}>
          회원가입
        </StHeaderButton>
      </StButtonWrap>
    </StHeader>
  );
}

const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: ${COLORS.BASE};
  height: 36px;
`;
const StIconWrap = styled.div`
  display: flex;
  align-items: center;
`;
const StLogo = styled.span`
  margin: 0 8px;
  font-size: 12px;
`;
const StButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
`;
// 글자만 있는 버튼
const StHeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: transparent;
  font-size: 12px;
  cursor: pointer;
`;
const StWriteSpan = styled.span`
  margin-right: 4px;
`;
