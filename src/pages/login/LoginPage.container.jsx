import React, { useState } from 'react'
import LoginUI from './LoginPage.presenter'
import { toggleAccessToken, toggleLoginPage, toggleLoginState } from '../../features/login/loginSlice';
import { useAppDispatch } from '../../appmain/RootStore';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { LoginAPI } from '../../api/axios/post.member.login';

export default function LoginPage() {

  // useNavigate 훅 사용
  const navigate = useNavigate(); 


  // Redux Dispatch 사용
  const dispatch = useAppDispatch();

  const showLoginUI = () => {
    dispatch(toggleLoginPage(false))

  }

  const loginData = useMutation({
    mutationFn: async (data) => LoginAPI(data), 
    onSuccess: (data) => {
        //accessToken받아오기
        dispatch(toggleAccessToken(data.accessToken));
        dispatch(toggleLoginState(true)); // 로그인 상태 true로 업데이트
        dispatch(toggleLoginPage(false)); //로그인 화면 닫기
    },        
    onError: (error) => {
      console.error('로그인 실패:', error);
      alert('존재하지 않는 계정입니다.');
    }
  })

  const handleLogin = () => {
    loginData.mutate({email, password});
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleJoin = () => {
    navigate('/join');
    dispatch(toggleLoginPage(false));
  }

  const handleFindUser = () => {
    navigate('/finduser');
    dispatch(toggleLoginPage(false));
  }

  return (
    <LoginUI
    email={email} 
    password={password}
    showLoginUI={showLoginUI}
    setEmail={setEmail}
    setPassword={setPassword}
    navigate={navigate}
    handleJoin={handleJoin}
    handleFindUser={handleFindUser}
    handleLogin={handleLogin}

    />
  )
}
