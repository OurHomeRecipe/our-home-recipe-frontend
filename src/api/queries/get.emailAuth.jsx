import React from 'react'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function GetEmailAuth({email, authCode}) {

    // useMutation을 사용해 데이터를 서버에 전송
    const mutation = useMutation({
        mutationFn: async (emailAuthData) => {
            const response = await axios.post('http://localhost:8080/v1/member/email/auth/confirm', emailAuthData, {
                withCredentials: true,
            });
            return response.data;
        }
    });
    
    const handleSubmitEmail = (e) => {
        e.preventDefault();
        mutation.mutate({email, authCode}, {
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
    <button onClick={handleSubmitEmail}>이메일 인증 확인</button>
  )
}
