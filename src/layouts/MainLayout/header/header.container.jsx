
import RootStore, { useAppDispatch, useAppSelector } from "../../../appmain/RootStore";
import { toggleSidebar } from "../../../features/sidebar/sidebarSlice";
import { toggleAccessToken, toggleLoginPage, toggleLoginState } from "../../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";
import HeaderUI from "./header.presenter";
import { toggleAlertUI } from "../../../features/alert/alertSlice";
import { postLogout } from "../../../api/axios/post.member.logout";
import { useMutation } from "@tanstack/react-query";
import { useFetchProfile } from "../../../api/queries/profileQueries";
import { useState } from "react";


export default function Header(){

    const isAlertUI = useAppSelector((state) => state.alert.showUI);
    const isLogin = RootStore.getState().login.loginState;
    const [profile, setProfile] = useState([]);

    useFetchProfile();


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
        profile={profile}
        handleToggle={handleToggle}
        handleProfil={handleProfil}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        />
    )
}