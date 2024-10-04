// 이메일 인증코드 확인

import API from "../interceptor/API";

export const postEmailAuchConfirm = async(emailAuthData) => {
    try {
        const response = await API.post(
            '/member/email/auth/confirm',
            emailAuthData,
            {withCredentials: true}
        );
        return response.data;
    } catch (error) {
        console.error('Error during email authentication request:', error);
        throw error;  // 에러를 다시 던져서 onError에서 처리할 수 있도록
    }
}