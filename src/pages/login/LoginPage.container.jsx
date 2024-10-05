import { useState } from 'react'
import LoginUI from './LoginPage.presenter'
import { toggleLoginPage } from '../../features/login/loginSlice';

import { useNavigate } from 'react-router-dom';
import { useLoginQuery } from '../../api/queries/loginQuery';
import { useAppDispatch } from '../../RootStore';

export default function LoginPage() {

  const {login} = useLoginQuery()

  // useNavigate 훅 사용
  const navigate = useNavigate(); 


  // Redux Dispatch 사용
  const dispatch = useAppDispatch();

  const showLoginUI = () => {
    dispatch(toggleLoginPage(false))

  }

  const handleLogin = () => {
    login(email, password);
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
