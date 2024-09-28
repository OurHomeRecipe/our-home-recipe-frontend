import React, { useState } from 'react'
import JoinPageUI from './JaoinPage.presenter'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

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
