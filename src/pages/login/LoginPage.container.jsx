import React, { useState } from 'react'
import LoginUI from './LoginPage.presenter'
import { toggleLogin } from '../../features/login/loginSlice';
import { useAppDispatch } from '../../appmain/RootStore';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function Login() {

  // Redux Dispatch 사용
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(toggleLogin(false))
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useMutation을 사용해 데이터를 서버에 전송
  const mutation = useMutation(async (loginData) => {
      const response = await axios.post('http://localhost:8080/v1/member/login', loginData);
      return response.data;
  });

    console.log(mutation);
    


  const handleSubmit = (e) => {
      e.preventDefault();
      mutation.mutate({ email, password });  // 입력된 데이터를 서버에 보냄
  };

  return (
    <LoginUI 
    handleLogin={handleLogin}
    handleSubmit={handleSubmit}
    setEmail={setEmail}
    setPassword={setPassword}
    />
  )
}
