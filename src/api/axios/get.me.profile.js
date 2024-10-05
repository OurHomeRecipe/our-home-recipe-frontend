// 내 프로필 조회
import RootStore from "../../appmain/RootStore";
import { toggleSetProfile } from "../../features/profile/profileSlice";
import API from "../interceptor/API";




export const getProfile = async () => {

  const isLogin = RootStore.getState().login.loginState;

  if(isLogin){
    try {
      const response = await API.get('/member/me/profile');
  
      RootStore.dispatch(toggleSetProfile(response.data));
      
      return response.data;
    } 
    catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }
  }
  else{
    throw new Error('User is not logged in');
  }

  };