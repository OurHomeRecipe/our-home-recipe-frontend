import React, { useState } from 'react'
import LoginUI from './LoginPage.presenter'
import { toggleLogin } from '../../features/login/loginSlice';
import { useAppDispatch } from '../../appmain/RootStore';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  // useNavigate 훅 사용
  const navigate = useNavigate(); 

  // Redux Dispatch 사용
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(toggleLogin(false))
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useMutation을 사용해 데이터를 서버에 전송
  const mutation = useMutation({
    mutationFn: async (loginData) => {
        const response = await axios.post('http://localhost:8080/v1/member/login', loginData, {
            withCredentials: true,
        });
        return response.data;
    },
    onError: (error) => {
        console.error('로그인 실패:', error);
    },
    onSuccess: (data) => {
        console.log('로그인 성공:', data);
        handleLogin(); // 로그인 성공 후에 로그인 상태를 업데이트
    }
});


const handleSubmit = (e) => {
  e.preventDefault();
  mutation.mutate({email, password}, {
      onSuccess: (data) => {
          console.log('로그인 성공:', data);
      },
      onError: (error) => {
          console.error('로그인 실패:', error);
      }
  });
};

  const handleJoin = () => {
    navigate('/join');
    dispatch(toggleLogin(false));
  }

  const handleFindUser = () => {
    navigate('/finduser');
    dispatch(toggleLogin(false));
  }

  return (
    <LoginUI 
    handleLogin={handleLogin}
    handleSubmit={handleSubmit}
    setEmail={setEmail}
    setPassword={setPassword}
    navigate={navigate}
    handleJoin={handleJoin}
    handleFindUser={handleFindUser}
    />
  )
}
