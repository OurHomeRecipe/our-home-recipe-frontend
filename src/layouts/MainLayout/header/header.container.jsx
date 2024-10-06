import { toggleSidebar } from "../../../features/sidebar/sidebarSlice";
import { toggleAccessToken, toggleLoginPage, toggleLoginState } from "../../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";
import HeaderUI from "./header.presenter";
import { toggleAlertUI } from "../../../features/alert/alertSlice";
import { useMutation } from "@tanstack/react-query";
import { useProfileQuery } from "../../../api/queries/profileQueries";
import RootStore, { useAppDispatch, useAppSelector } from "../../../RootStore";
import { postLogout } from "../../../api/axios/member/loginApi";




export default function Header(){

    const isAlertUI = useAppSelector((state) => state.alert.showUI);
    const isLogin = RootStore.getState().login.loginState;
    const {profileImage, nickname} = useProfileQuery();




    // useNavigate 훅 사용
    const navigate = useNavigate(); 

    // Redux Dispatch 사용
    const dispatch = useAppDispatch();

    // SideBar
    const handleToggle = () => {
        dispatch(toggleSidebar());
      };

    const showAlert = () => {
        dispatch(toggleAlertUI());
    }

    const handleLogo = () => navigate('/');

    const handleProfil = () => {
        navigate('/mypage')
    }

    //로그인
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(toggleLoginPage(true))
    }

    const logOut = useMutation({mutationFn: async () => postLogout()})
    
    //로그아웃
    const handleLogout = (e) => {
        e.preventDefault();
        logOut.mutate({},{
            onSuccess: (data) => {
                console.log(data);
                dispatch(toggleLoginState(false));
                dispatch(toggleAccessToken(null));
            },
            onError: (error) => {
                console.error('로그아웃 실패:', error);
            }
        })

    }

    return(
        <HeaderUI
        isLogin={isLogin}
        showAlert={showAlert}
        isAlertUI={isAlertUI}
        handleLogo={handleLogo}
        profileImage={profileImage}
        nickname={nickname}
        handleToggle={handleToggle}
        handleProfil={handleProfil}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        />
    )
}