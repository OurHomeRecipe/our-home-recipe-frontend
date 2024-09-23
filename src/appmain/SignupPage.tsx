import React, { useState } from "react";

// 각 입력 항목에 대한 state 관리 (이메일, 비밀번호, 비밀번호 확인, 닉네임, 휴대폰 번호) ✅
// 이메일 유효성 검사
// 비밀번호 유효성 검사
// 비밀번호 확인 일치 검사
// 휴대폰 번호 유효성 검사
// 유효성 검사에 따른 실시간 피드백 표시
// 이메일, 비밀번호, 닉네임이 유효할 때 회원가입 버튼 활성화
// 회원가입 성공 시 페이지 이동 (예: 메인 페이지 또는 로그인 페이지)
// 닉네임 및 이메일 중복 체크 기능

function SignupPage() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    const passwordRegEx = /^[A-Za-z0-9!@#$%^&*]{8,20}$/;
    const confirmPasswordRegEx = /^[A-Za-z0-9!@#$%^&*]{8,20}$/;
    const usernameRegEx = /^[가-힣]{2,10}$/;
    const phoneNumberRegEx = /^01[016789]-?([0-9]{3,4})-?([0-9]{4})$/;
    const nicknameRegEx = /^[a-z0-9가-힣]{2,10}$/;

    const emailCheck = (userEmail:string) => emailRegEx.test(userEmail); //형식에 맞을 경우, true 리턴

    const passwordCheck = (password:string) => {
        if(password.match(passwordRegEx)===null) { //형식에 맞지 않을 경우 아래 콘솔 출력
            alert('비밀번호 형식을 확인해주세요');
            return false;
        } else { return true; }
    } 

    const confirmPasswordCheck = (password: string, confirmPassword: string) => {
        if(password !== confirmPassword){ // 비밀번호와 
            return false;
        } else { return true; }
    }

    const usernameCheck = (username:string) => usernameRegEx.test(username);

    function signup(){
        
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">회원가입 페이지</h2>
                <form onSubmit={signup}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">이메일</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                            type="email"
                            placeholder="이메일을 입력해주세요"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">비밀번호</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className="text-xs italic text-blue-600 text-center">비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">비밀번호 확인</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                            type="password"
                            placeholder="비밀번호를 다시 입력해주세요"
                            value={password}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {
                            (password===confirmPassword)? null : <p className="text-xs italic text-red-600 text-center">비밀번호가 일치하지 않습니다</p>
                        }
                    </div>
                    <br />
                    {/* 수평 구분선 */}
                    <div className="border-t border-gray-300 w-auto mx-6"></div>
                    <br />
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">이름</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                            type="email"
                            placeholder="이름을 입력해주세요"
                            value={email}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">휴대폰 번호</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                            type="email"
                            placeholder="010-xxxx-xxxx"
                            value={email}
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-200">실명인증</button>
                    <br />
                    <br />
                    {/* 수평 구분선 */}
                    <div className="border-t border-gray-300 w-auto mx-6"></div>
                    <br />
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">닉네임</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                            type="email"
                            placeholder="닉네임을 설정해주세요"
                            value={email}
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">회원가입</button>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;