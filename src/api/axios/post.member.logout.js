//로그아웃 요청

import API from "../interceptor/API"

export const postLogout = async () => {
    try {
        const response = await API.post('/member/logout');
        return response.data;
        
    } catch (error) {
        
    }
}