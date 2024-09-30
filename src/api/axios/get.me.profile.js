import API from "../interceptor/API";


export const getProfile = async () => {
    const { data } = await API.get('/member/me/profile');
    return data;
  };