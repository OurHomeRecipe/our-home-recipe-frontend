import API from "../../interceptor/API";


/**
 * 로그인 요청
 * @param loginData email이랑 password
 * @author 소연
 */
export const postLogin = async(loginData) => {
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
export const postLogout = async () => {
    try {
        const response = await API.post('/member/logout');
        return response.data;
        
    } catch (error) {
        
    }
}