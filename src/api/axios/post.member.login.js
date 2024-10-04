//로그인

import API from "../interceptor/API";

export const LoginAPI = async(loginData) => {
    try {
        const response = await API.post(
            '/member/login',
            loginData,
            {withCredentials: true}, //CORS
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}