import { useMutation } from "@tanstack/react-query"
import { postEmailAuchConfirm, postEmailAuth } from "../axios/member/emailApi";


/**
 * 이메일 인증코드 요청 쿼리
 * @author 소연
 * @param email email 정보
 */
export const useEmailAuthQuery = () => {

    const emailAuthMutation = useMutation({
        mutationFn: postEmailAuth,
        onSuccess: (data) => {
            alert(data.message);
        },
        onError: (error) => {
            console.error(error);
            alert(error.errorMessage);
        }
    })

    const emailAuth = (email) => {
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

    const emailAuthConfirmMutation = useMutation({
        mutationFn: postEmailAuchConfirm,
        onSuccess: (data) => {
            alert(data.message);
        },
        onError: (error) => {
            console.error('이메일 인증코드 확인 실패',error);
        }
    })

    const emailAuthConfirm = (email, authCode) => {
        emailAuthConfirmMutation.mutate({email, authCode});
    }

    return{
        emailAuthConfirm
    }
}