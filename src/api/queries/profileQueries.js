import { useMutation, useQuery } from "@tanstack/react-query";
import API from "../interceptor/API";
import { useEffect, useState } from "react";

// Profile 조회 쿼리
export const useProfileQuery = () => {

    const [profileImage, setProfileImage] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickName] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [introduce, setIntroduce] = useState('');

    const {data, error} = useQuery({
        queryKey: ['profile'],  // 쿼리 키
        queryFn: async () => {
            try {
                const response = await API.get('/member/me/profile');
                return response.data;
            } 
            catch (error) {
                throw error;
            }
        },
        retry: false // 쿼리 실패 시 재시도 방지
    });

    useEffect(() => {
        if (data) {
            setProfileImage(data.profileImage);
            setNickName(data.nickname);
            setName(data.name);
            setEmail(data.email);
            setPhoneNumber(data.phoneNumber);
            setIntroduce(data.introduce);
        }
    }, [data]); // data가 업데이트될 때마다 실행
    
    return {
        profileImage,
        nickname,
        name,
        email,
        phoneNumber,
        introduce,
        error
    }
    
};



// 프로필 업데이트 쿼리
export const useProfileUpdateQuery = () => { 

        const update = useMutation({
            mutationFn: async (profileData) => {
                try {
                    const response = await API.post(
                        '/member/me/profile',
                        profileData,
                        {headers: {"Content-Type": 'multipart/from-data'}},
                        {withCredentials: true}, //CORS
                    );
                    return response.data;
                } catch (error) {
                    throw error;
                }
            },
            onSuccess: (data) => {
                console.log('프로필 업데이트 성공', data);
                alert('프로필이 수정되었습니다.');
                window.location.reload(); //페이지 새로고침
            },
            onError: (error) => {
                console.error('프로필 수정 실패:', error);
            }

        });

        const profileUpdate = (formData) => {
            update.mutate(formData);
        }

        return {profileUpdate};

}