// 내 프로필 업데이트

import API from "../interceptor/API";

export const updateProfile = async (profileData) => {
    try {
        const response = await API.post(
            '/member/me/profile',
            profileData,
            {
                headers: {
                    "Content-Type": 'multipart/from-data'
                }
            },
            {withCredentials: true}
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching profile:', error);
        console.log(error.errorMessage);
    }
};