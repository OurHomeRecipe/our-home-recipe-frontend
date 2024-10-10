import { EmailAuthData, RegisterData } from "../../../interfaces";
import API from "../../interceptor/API";


/**
 * 이메일 인증코드 요청 API
 * @author 소연
 * @param email email 정보
 */
export const postEmailAuth = async (email:EmailAuthData) => {
    try {
        const response = await API.post(
            '/member/email/auth/request', 
            email,
            {withCredentials: true}
        );
        console.log(response);
        return response;
    } catch (error) {
        throw error;  // 에러를 다시 던져서 onError에서 처리할 수 있도록
    }
}


/**
 * 이메일 인증코드 확인 API
 * @author 소연
 * @param {*} emailAuthData {email, authCode}
 */
export const postEmailAuchConfirm = async(emailAuthData:EmailAuthData)=> {
    try {
        const response = await API.post(
            '/member/email/auth/confirm',
            emailAuthData,
            {withCredentials: true}
        );
        return response;
    } catch (error) {
        throw error;  // 에러를 다시 던져서 onError에서 처리할 수 있도록
    }
}


/**
 * 회원가입 요청
 * @author 소연
 * @param {*} registerData {email, nickname, phoneNumber, name, password, passwordConfirm}
 * @returns {*} {id:4}
 */
export const postRegister = async(registerData: RegisterData) => {
    try {
        const response = await API.post(
            '/member/register',
            registerData,
            {withCredentials: true}
        );
        return response.data;
    } catch (error) {
        throw error
    }
}