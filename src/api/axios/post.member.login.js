//로그인

import RootStore from "../../appmain/RootStore";
import { toggleLoginState } from "../../features/login/loginSlice";
import API from "../interceptor/API";

export const LoginAPI = async(loginData) => {
    try {
        const response = await API.post(
            '/member/login',
            loginData,
            {withCredentials: true}, //CORS
        );

        //로그인 성공시
        if(response.code === 200){ 
            RootStore.dispatch(toggleLoginState(true)); //로그인 상태 true
        }

        return response.data;

    } catch (error) {
        throw error;
    }
}