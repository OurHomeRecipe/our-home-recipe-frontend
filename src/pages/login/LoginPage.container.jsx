import React from 'react'
import LoginUI from './LoginPage.presenter'
import { toggleLogin } from '../../features/login/loginSlice';
import { useAppDispatch } from '../../appmain/RootStore';

export default function Login() {

  // Redux Dispatch 사용
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(toggleLogin(false))
  }

  // 로직 구현
  return (
    <LoginUI handleLogin={handleLogin}/>
  )
}
