import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import style from '../../css/pages/loginpage.module.css'
import { useAppDispatch } from '../../appmain/RootStore';
import { toggleLoginPage, toggleLoginState } from '../../features/login/loginSlice';

export default function PostMemberLogin({email,password, handleLogin}) {

    // Redux Dispatch 사용
    const dispatch = useAppDispatch();

    // useMutation을 사용해 데이터를 서버에 전송
    const mutation = useMutation({
        mutationFn: async (loginData) => {
            const response = await axios.post('http://localhost:8080/v1/member/login', loginData, {
            withCredentials: true, //CORS
            });
            return response.data;
        },
        onError: (error) => {
            console.error('로그인 실패:', error);
        },
        onSuccess: (data) => {
            console.log('로그인 성공:', data);
            dispatch(toggleLoginPage(false)); //로그인 화면 닫기
            dispatch(toggleLoginState(true)); // 로그인 상태 true로 업데이트
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email === ''){
            alert('이메일을 입력해주세요')
            return;
        }
        if(password === ''){
            alert('비밀번호를 입력해주세요')
            return;
        }

        mutation.mutate({email, password});
    };

  return (
    <button className={style.loginBtn} onClick={handleSubmit}>로그인</button>
  )
}
