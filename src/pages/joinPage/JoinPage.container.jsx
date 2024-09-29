import React, { useState } from 'react'
import JoinPageUI from './JoinPage.presenter'

export default function JoinPage() {

  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [password, setPassword] = useState('');


  return (
    <JoinPageUI
      email={email}
      authCode={authCode}
      setEmail={setEmail}
      setAuthCode={setAuthCode}
    />
  )
}
