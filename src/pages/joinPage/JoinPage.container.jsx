import React, { useState } from 'react'
import JoinPageUI from './JoinPage.presenter'
import { postEmailAuchConfirm, postEmailAuth, postRegister } from '../../api/axios/member/emailApi';
import { useNavigate } from 'react-router-dom';
import RootStore, { useAppSelector } from '../../RootStore';
import { toggleAlertMessage, toggleAlertServerity } from '../../features/alert/alertSlice';

export default function JoinPage() {

  const {alertSeverity, alertMessage} = useAppSelector(state => state.alert);

  // useNavigate 훅 사용
  const navigate = useNavigate(); 

  const [loginData, setLoginData] = useState({
    email: '',
    authCode: '',
    nickname: '',
    phoneNumber: '',
    name: '',
    password: '',
    passwordConfirm: '',
  })

  const handleSubmitEmail = async(e) => {
    e.preventDefault();
    try {
      const data = await postEmailAuth(loginData.email);
      alert(data) // 데이터 처리
    } catch (error) {
        alert(error.errorMessage);
    }
  };

  const handleEmailConfirm = async(e) => {
    if(loginData.authCode === ''){
      RootStore.dispatch(toggleAlertServerity("info"));
      RootStore.dispatch(toggleAlertMessage("올바른 인증번호를 입력해주세요"));
      return;
    }
    e.preventDefault();
    try {
      const data = await postEmailAuchConfirm({email: loginData.email, authCode: loginData.authCode});
      alert(data);
    } catch (error) {
        alert(error.errorMessage);
    }
};

const handleSubmitJoin = async(e) => {
  e.preventDefault();
  try {
      const data = await postRegister(loginData);
      console.log('회원가입 성공:', data);
      alert('회원가입을 축하합니다');
      navigate('/');
  } catch (error) {
      alert(error.errorMessage);
  }
};

  return (
    <JoinPageUI
      loginData={loginData}
      alertSeverity={alertSeverity}
      alertMessage={alertMessage}
      setLoginData={setLoginData}
      handleSubmitEmail={handleSubmitEmail}
      handleEmailConfirm={handleEmailConfirm}
      handleSubmitJoin={handleSubmitJoin}
    />
  )
}
