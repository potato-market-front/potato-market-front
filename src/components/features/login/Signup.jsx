import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../common/Input';
import Button from '../../common/Button';
import {
  idDupCheck,
  nickDupCheck,
  postSignup,
} from '../../../redux/modules/login';
import TextButton from '../../common/TextButton';

function SignUp() {
  const [loginId, setLoginId] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  //TODO: 오류 메세지 출력
  const [idMsg, setIdMsg] = useState('');
  const [nameMsg, setNameMsg] = useState('');
  const [passMsg, setPassMsg] = useState('');

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPass, setIsPass] = useState(false);
  // TODO:

  const navigation = useNavigate();

  const onSignUp = () => {
    postSignup({
      loginId,
      nickname,
      password,
    }).then((res) => {
      localStorage.setItem('id', res.headers.authorization);
      // 어떤 변수명에 토큰 받을지 서로 얘기해야함 (res.headers...)
      //
      navigation('/main');
    });
  };

  const idDup = () => {
    console.log('id값:', loginId);
    const jsonData = { loginId: loginId };
    idDupCheck(jsonData).then((response) => {
      console.log('data:', response.status);
      if (response.status === 200) {
        alert('사용 가능한 ID입니다.');
        setLoginId(loginId);
      } else if (response.status === 400) {
        alert('이미 사용중인 ID입니다.');
        setLoginId('');
      }
    });
  };

  const nickDup = () => {
    const dataJson = { nickname: nickname };
    const result = JSON.stringify(dataJson);
    nickDupCheck(result).then((data) => {
      console.log('Nick 중복:', data);
      if (data.data.statusCode === 200) {
        alert('사용 가능한 Nickname입니다.');
        setNickname(nickname);
      } else {
        alert('이미 사용중인 Nickname입니다.');
        setNickname('');
      }
    });
  };

  // TODO: INPUT change 핸들러
  const onChangeId = (e) => {
    const currentId = e.target.value;
    setLoginId(currentId);
    const idRegExp = /^[a-z0-9]{4,10}$/;

    if (!idRegExp.test(currentId)) {
      setIdMsg('4-10자 소문자와 숫자로 입력해주세요.');
      setIsId(false);
    } else if (idRegExp.test(currentId)) {
      setIdMsg('');
      setIsId(true);
    }
  };
  // TODO: 패스워드 change 핸들러
  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passRegExp = /^[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if (!passRegExp.test(currentPassword)) {
      setPassMsg('8-15자의 대소문자, 숫자, 특수문자(!@#$%^&*)로 입력해주세요.');
      setIsPass(false);
    } else if (passRegExp.test(currentPassword)) {
      setPassMsg('');
      setIsPass(true);
    }
  };

  return (
    <StTopContainer>
      <h1>감자마켓 회원가입</h1>
      <StInputGroup>
        <StInputnButton>
          <Input
            value={loginId}
            onChange={onChangeId}
            type='text'
            name='id'
            label='ID를 입력하세요.'
            width={'250px'}
          ></Input>
          <TextButton onClick={idDup}>중복확인</TextButton>
        </StInputnButton>
        <p
          style={{
            fontSize: '11px',
            color: 'red',
            marginLeft: '100px',
          }}
        >
          {idMsg}
        </p>
        <StInputnButton>
          <Input
            value={nickname}
            onChange={(event) => {
              setNickname(event.target.value);
            }}
            type='text'
            name='nick'
            label='NickName을 입력하세요.'
            width={'250px'}
          ></Input>
          <TextButton onClick={nickDup}>중복확인</TextButton>
        </StInputnButton>
        <p
          style={{
            fontSize: '11px',
            color: 'red',
          }}
        >
          {nameMsg}
        </p>
        <div>
          <Input
            onChange={onChangePassword}
            type='password'
            name='password'
            label='비밀번호를 입력하세요.'
            width={'250px'}
          ></Input>
        </div>
      </StInputGroup>
      <p
        style={{
          fontSize: '11px',
          color: 'red',
        }}
      >
        {passMsg}
      </p>
      <StButtonGroup>
        <div>
          <Button width={'250px'} onClick={onSignUp}>
            Sign Up
          </Button>
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

  gap: 30px;
`;

const StInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  gap: 20px;
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
