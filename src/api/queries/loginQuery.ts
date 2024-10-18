import { useMutation } from "@tanstack/react-query";
import { toggleAccessToken, toggleLoginPage, toggleLoginState } from "../../features/login/loginSlice";
import RootStore from "../../RootStore";
import { postLogin, postLogout } from "../axios/member/loginApi";

/**
 * 로그인 Query
 * @author 소연
 */
export const useLoginQuery = () => {

    const loginMuation = useMutation({
        mutationFn: postLogin,
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


    const login = (email:string, password:string) => {
        loginMuation.mutate({email, password});
    }

    return {login}
}



/**
 * 로그아웃 React Query
 * 
 */
export const useLogoutQuery = () => {

    const logOutData = useMutation({
        mutationFn: async () => postLogout,
        onSuccess: (data) => {
            console.log(data);
            RootStore.dispatch(toggleLoginState(false));
            RootStore.dispatch(toggleAccessToken(null));
        },
        onError: (error) => {
            console.error('로그아웃 실패:', error);
        }
    })

    const logOut = () => {
        logOutData.mutate();
    }

    return {logOut}
}