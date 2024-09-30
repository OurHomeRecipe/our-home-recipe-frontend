import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

export default function PostEmailAuth({email}) {

        // useMutation을 사용해 데이터를 서버에 전송
        const mutation = useMutation({
            mutationFn: async (emailAuthData) => {
                const response = await axios.post('http://localhost:8080/v1/member/email/auth/request', emailAuthData, {
                    withCredentials: true,
                });
                return response.data;
            }
        });
      
        const handleSubmitEmail = (e) => {
          e.preventDefault();
          mutation.mutate({email}, {
              onSuccess: (data) => {
                  console.log('이메일 인증 성공:', data);
                  alert('인증 메일이 발송되었습니다. 메일을 확인해주세요.')
              },
              onError: (error) => {
                  console.error('이메일 인증 실패:', error);
              }
          });
        };

  return (
    <button onClick={handleSubmitEmail}>이메일 인증 요청</button>
  )
}
