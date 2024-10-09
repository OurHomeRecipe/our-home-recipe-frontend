import {useMutation} from "@tanstack/react-query";
import {resetPasswordApi} from "../axios/memberApi";
import {useNavigate} from "react-router-dom";

/**
 * 비밀번호 찾기(초기화)
 */
export const useFindUserResetPassword = () => {
    const navigate = useNavigate();

    const resetPasswordMutation = useMutation({
        mutationFn: resetPasswordApi,
        onSuccess: (data) => {
            alert('새로운 비밀번호를 이메일에 전송했습니다.');
            navigate('/');
        },
        onError: (error) => {
            alert('비밀번호 찾기 요청이 실패했습니다. 다시 시도해주세요.');
        }
    });

    const handleResetPassword = (formData) => {
        resetPasswordMutation.mutate(formData);
    }

    return {handleResetPassword};
}