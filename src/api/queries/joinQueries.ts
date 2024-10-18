import { useMutation } from "@tanstack/react-query"
import { postEmailAuchConfirm, postEmailAuth } from "../axios/member/emailApi";
import { EmailAuthData, EmailAuthResponse } from "../../interfaces";


/**
 * 이메일 인증코드 요청 쿼리
 * @author 소연
 * @param email email 정보
 */
export const useEmailAuthQuery = () => {

    const emailAuthMutation = useMutation <EmailAuthResponse, Error, string> ({
        mutationFn: postEmailAuth,
        onSuccess: (data) => {
            alert(data.message);
        },
        onError: (error) => {
            console.error('이메인 인증요청 실패', error);
        }
    })

    const emailAuth = (email: string) => {
        emailAuthMutation.mutate(email);
    }
 
    return{
        emailAuth
    }
}

/**
 * 이메일 인증코드 확인 쿼리
 * @author 소연
 */
export const useEmailAuthConfirmQuery = () => {

    const emailAuthConfirmMutation = useMutation<EmailAuthResponse, Error, EmailAuthData>({
        mutationFn: postEmailAuchConfirm,
        onSuccess: (data) => {
            alert(data.message);
        },
        onError: (error) => {
            console.error('이메일 인증코드 확인 실패',error);
        }
    })

    const emailAuthConfirm = (email: string, authCode: string) => {
        emailAuthConfirmMutation.mutate({email, authCode});
    }

    return{
        emailAuthConfirm
    }
}