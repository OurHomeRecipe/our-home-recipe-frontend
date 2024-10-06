import API from "../../interceptor/API";

// 로그인 데이터 타입 정의
interface LoginData {
    email: string;
    password: string;
}

// 로그인 응답 타입 정의
interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

interface LogoutResponse {
    message: string;
}



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