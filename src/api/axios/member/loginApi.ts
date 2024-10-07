
import { LoginData, LoginResponse, LogoutResponse } from "../../../interfaces";
import API from "../../interceptor/API";


/**
 * 로그인 요청 API
 * @param loginData email이랑 password
 * @author 소연
 */
export const postLogin = async(loginData:LoginData): Promise<LoginResponse> => {
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


/**
 * 로그아웃 요청
 * @author 소연
 */
export const postLogout = async (): Promise<LogoutResponse> => {
    try {
        const response = await API.post('/member/logout');
        return response.data;
        
    } catch (error) {
        throw error
    }
}