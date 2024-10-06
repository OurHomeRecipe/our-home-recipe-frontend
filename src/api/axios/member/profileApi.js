import API from "../../interceptor/API";


/**
 * 프로필 업데이트
 * @author 소연
 * @param {*} profileData 
 * @returns {*} {id : 1}
 */
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
        throw error
    }
};