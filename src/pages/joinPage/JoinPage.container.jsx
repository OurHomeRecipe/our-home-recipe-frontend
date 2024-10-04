import React, { useState } from 'react'
import JoinPageUI from './JoinPage.presenter'
import { useMutation } from '@tanstack/react-query';
import { postEmailAuth } from '../../api/axios/post.email.auth.request';
import { postEmailAuchConfirm } from '../../api/axios/post.email.auth.confirm';

export default function JoinPage() {

  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [nickname, setNickName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState();

  // useMutation을 사용해 데이터를 서버에 전송
  const mutation1 = useMutation({mutationFn: async (emailAuthData) => postEmailAuth(emailAuthData)});

  const handleSubmitEmail = (e) => {
  e.preventDefault();
  mutation1.mutate({email}, {
      onSuccess: (data) => {
          console.log('이메일 인증 성공:', data);
          alert('인증 메일이 발송되었습니다. 메일을 확인해주세요.')
      },
      onError: (error) => {
          console.error('이메일 인증 실패:', error);
          alert(error.errorMessage);
      }
  });
  };

  const mutation2 = useMutation({mutationFn: async (emailAuthData) => postEmailAuchConfirm(emailAuthData)});

  const handleEmailConfirm = (e) => {
    e.preventDefault();
    mutation2.mutate({email, authCode}, {
        onSuccess: (data) => {
            console.log('이메일 인증 성공:', data);
            alert('인증 성공');

        },
        onError: (error) => {
            console.error('이메일 인증 실패:', error);
            alert('인증 실패');
        }
    });
};

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
      handleSubmitEmail={handleSubmitEmail}
      handleEmailConfirm={handleEmailConfirm}
    />
  )
}
