import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage2() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState('로그인')
    const goToMain = () => {
        navigate("/main");
    };

    function onSubmit(e:any) {
        e.preventDefault();
        setLoading(true)
        setIsLoggingIn('로그인 중...')
        axios.post('/api/login', {
            email, password
        })
            .then((res) => {
                console.log(res)
                setLoading(false)
                setIsLoggingIn('로그인')
                goToMain();
            })
            .catch(error => {
                console.error('Error:', error)
                setLoading(false)
                setIsLoggingIn('로그인')
                if(error){
                    alert('회원정보를 확인해주세요')
                }
            })

        // fetch 형식일 경우
        // fetch('/api/login', {
        //     method: 'post',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({ email, password })
        // })
        //     .then(res => {
        //         if (!res.ok) {
        //             throw new Error('Login Failed');
        //         }
        //         return res.json();
        //     })
        //     .then(data => console.log(data))
        //     .catch(error => console.error('Error:', error))
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl flex">
                {/* 기존 로그인 폼 */}
                <div className="w-1/2">
                    <h3 className="text-2xl font-bold mb-6 text-center">로그인 페이지</h3>
                    <form onSubmit={onSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">이메일</label>
                            <input
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                                type="email"
                                placeholder="이메일을 입력하세요"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading} // 로딩 상태에 따른 비활성화
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">비밀번호</label>
                            <input
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading} // 로딩 상태에 따른 비활성화
                            />
                        </div>
                        {
                            <button
                            type="submit"
                            id="loginButton"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                            disabled={loading} /* 로딩 상태에 따른 비활성화 */ >{isLoggingIn}</button>
                        }   
                    </form>
                    <div className="flex justify-between mt-4">
                        <Link to="/findIdPassword" className="font-semibold">아이디/비밀번호 찾기</Link>
                        <Link to="/signup" className="font-semibold">회원가입</Link>
                    </div>
                </div>

                {/* 수직 구분선 */}
                <div className="border-l border-gray-300 h-auto mx-6"></div>

                {/* 소셜 로그인 칸 */}
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <button type="button" >
                        <img src="/socialLoginButton/kakao_login_large_narrow.png" alt="kakaoSocialLogin" style={{ height: '75%' }}/>
                    </button>
                    <button type="button">
                        <img src="/socialLoginButton/btnG_완성형.png" alt="naverSocialLogin" style={{ height: '75%' }}/>
                    </button>
                    <button type="button">
                        <img src="/socialLoginButton/web_neutral_sq_SI@3x.png" alt="googleSocialLogin" style={{ height: '75%' }}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage2;