import { useMutation } from "@tanstack/react-query";
import { toggleAccessToken, toggleLoginPage, toggleLoginState } from "../../features/login/loginSlice";

import API from "../interceptor/API";
import RootStore from "../../RootStore";

export const useLoginQuery = () => {

    const loginData = useMutation({
        mutationFn: async(loginData) => {
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
        }, 
        onSuccess: (data) => {
            //accessToken받아오기
            RootStore.dispatch(toggleAccessToken(data.accessToken));
            RootStore.dispatch(toggleLoginState(true)); // 로그인 상태 true로 업데이트
            RootStore.dispatch(toggleLoginPage(false)); //로그인 화면 닫기
        },        
        onError: (error) => {
          console.error('로그인 실패:', error);
          alert('존재하지 않는 계정입니다.');
        }
      })


    const login = (email,password) => {
        loginData.mutate({email, password});
    }

    return {login}
}