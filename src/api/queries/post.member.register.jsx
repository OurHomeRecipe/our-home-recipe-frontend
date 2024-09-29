import React from 'react'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function PostMemberRegister({email, nickname, phoneNumber, name, password, passwordConfirm}) {

     // useMutation을 사용해 데이터를 서버에 전송
    const mutation = useMutation({
        mutationFn: async (registerData) => {
            const response = await axios.post('http://localhost:8080/v1/member/register', registerData, {
                withCredentials: true,
            });
            return response.data;
        },
        onError: (error) => {
            console.error('회원가입 실패:', error.errorMessage);
        },
        onSuccess: (data) => {
            console.log('로그인 성공:', data);
        }
    });

    const handleSubmitJoin = (e) => {
        e.preventDefault();
        mutation.mutate({email, nickname, phoneNumber, name, password, passwordConfirm}, {
            onSuccess: (data) => {
                console.log('회원가입 성공:', data);
                alert('회원가입을 축하합니다')
            },
            onError: (error) => {
                console.error('회원가입 실패:', error);
            }
        });
      };

  return (
    <button onClick={handleSubmitJoin}>회원가입</button>
  )
}
