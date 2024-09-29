import React, { useState } from 'react'
import LoginUI from './LoginPage.presenter'
import { toggleLoginPage } from '../../features/login/loginSlice';
import { useAppDispatch } from '../../appmain/RootStore';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

  // useNavigate 훅 사용
  const navigate = useNavigate(); 

  // Redux Dispatch 사용
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(toggleLoginPage(false))
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
    handleLogin={handleLogin}
    setEmail={setEmail}
    setPassword={setPassword}
    navigate={navigate}
    handleJoin={handleJoin}
    handleFindUser={handleFindUser}
    />
  )
}
