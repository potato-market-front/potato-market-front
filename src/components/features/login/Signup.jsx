import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../common/Input';
import Button from '../../common/Button';
// import {
//   idDupCheck,
//   nickDupCheck,
//   postSignup,
// } from '../../../redux/modules/Login';

import TextButton from '../../common/TextButton';

function SignUp() {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigate();

  // const onSignUp = () => {
  //   postSignup({
  //     id,
  //     nickname,
  //     password,
  //   }).then((res) => {
  //     localStorage.setItem('id', res.headers.authorization);
  //     navigation('/login');
  //   });
  // };

  // const idDup = (id) => {
  //   idDupCheck(id).then((res) => {
  //     console.log('ID 중복:', res);
  //     if (res === false) {
  //       alert('사용 가능한 ID입니다.');
  //       setId(res);
  //     } else {
  //       alert('이미 사용중인 ID입니다.');
  //       setId(res);
  //       id('');
  //     }
  //   });
  // };

  // const nickDup = (nickname) => {
  //   nickDupCheck(nickname).then((res) => {
  //     console.log('Nick 중복:', res);
  //     if (res === false) {
  //       alert('사용 가능한 Nickname입니다.');
  //       setNickname(res);
  //     } else {
  //       alert('이미 사용중인 Nickname입니다.');
  //       setNickname(res);
  //       nickname('');
  //     }
  //   });
  // };

  return (
    <StTopContainer>
      <h1>감자마켓 회원가입</h1>
      <StInputGroup>
        <StInputnButton>
          <Input
            onChange={(event) => {
              setId(event.target.value);
            }}
            type='text'
            name='id'
            label='ID를 입력하세요.'
            width={'250px'}
          ></Input>
          {/* <TextButton onClick={idDup}>중복확인</TextButton> */}
        </StInputnButton>
        <StInputnButton>
          <Input
            onChange={(event) => {
              setNickname(event.target.value);
            }}
            type='text'
            name='nick'
            label='NickName을 입력하세요.'
            width={'250px'}
          ></Input>
          {/* <TextButton onClick={nickDup}>중복확인</TextButton> */}
        </StInputnButton>
        <div>
          <Input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type='password'
            name='password'
            label='비밀번호를 입력하세요.'
            width={'250px'}
          ></Input>
        </div>
      </StInputGroup>
      <StButtonGroup>
        <div>
          {/* <Button width={'250px'} onClick={onSignUp}>
            Sign Up
          </Button> */}
        </div>
        <StLink>
          <Link to='/login'>
            Already a member? Please{' '}
            <span style={{ fontWeight: 'bold' }}>Login.</span>
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
