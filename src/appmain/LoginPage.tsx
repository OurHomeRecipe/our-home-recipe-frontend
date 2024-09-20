import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

function LoginPage() {
    // 샘플
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // React Query의 useMutation을 사용하여 로그인 요청 처리
    // @ts-ignore
    const mutation:any = useMutation((loginData) => {
        return axios.post('/api/login', loginData);
    });

    const handleSubmit = (e:any) => {
        e.preventDefault();

        mutation.mutate({
            email: email,
            password: password,
        });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        {mutation.isLoading ? 'Logging in...' : 'Login'}
                    </button>
                    {mutation.isError && (
                        <p className="text-red-500 mt-4">Login failed. Please try again.</p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default LoginPage;