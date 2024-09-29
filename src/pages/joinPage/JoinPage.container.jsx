import React, { useState } from 'react'
import JoinPageUI from './JoinPage.presenter'

export default function JoinPage() {

  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [nickname, setNickName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState();



  return (
    <JoinPageUI
      email={email}
      authCode={authCode}
      nickname={nickname}
      phoneNumber={phoneNumber}
      userName={userName}
      password={password}
      passwordConfirm={passwordConfirm}
      setNickName={setNickName}
      setPassword={setPassword}
      setPasswordConfirm={setPasswordConfirm}
      setPhoneNumber={setPhoneNumber}
      setUserName={setUserName}
      setEmail={setEmail}
      setAuthCode={setAuthCode}
    />
  )
}
