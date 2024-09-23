import React, { useState } from "react";

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    const passwordRegEx = /^[A-Za-z0-9]{8,20}$/

    const emailCheck = (userEmail:string) => {
        return emailRegEx.test(userEmail); //형식에 맞을 경우, true 리턴
    }

    const passwordCheck = (password:string) => {
        if(password.match(passwordRegEx)===null) { //형식에 맞지 않을 경우 아래 콘솔 출력
        alert('비밀번호 형식을 확인해주세요');
        }
    } 
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">회원가입 페이지</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">이메일</label>
                        <input 
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                            type="email"
                            placeholder="이메일을 입력하세요"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        />
                        <p className="text-xs italic text-blue-600">비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요</p>
                    </div>
                    <br />
                    <button 
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">회원가입</button>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;