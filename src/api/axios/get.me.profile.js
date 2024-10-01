import API from "../interceptor/API";


export const getProfile = async () => {
  try {
    const { data } = await API.get('/member/me/profile');
    console.log(data);
    return data;
} catch (error) {
    console.error('Error fetching profile:', error);
}
  };