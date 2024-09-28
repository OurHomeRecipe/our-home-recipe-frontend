import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function Posts() {
    // useQuery를 사용해 데이터 가져오기
    const { data, error, isLoading } = useQuery(['posts'], async () => {
        const response = await axios.post('https://localhost:3000/member/login');
        return response.data;
    });

    // 로딩 상태 처리
    if (isLoading) return <div>Loading...</div>;

    // 에러 상태 처리
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
