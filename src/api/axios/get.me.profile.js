// 내 프로필 조회
import API from "../interceptor/API";


export const getProfile = async () => {
  try {
    const response = await API.get('/member/me/profile');
      return response.data;
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }
  };