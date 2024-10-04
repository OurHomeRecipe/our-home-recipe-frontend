import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../appmain/RootStore";
import { toggleSidebar } from "../../../features/sidebar/sidebarSlice";
import { toggleLoginPage } from "../../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";
import HeaderUI from "./header.presenter";
import { getProfile } from "../../../api/axios/get.me.profile";
import { toggleAlertUI } from "../../../features/alert/alertSlice";
import { postLogout } from "../../../api/axios/post.member.logout";


export default function Header(){


    const isLogin = useAppSelector((state) => state.login.loginState);
    const isAlertUI = useAppSelector((state) => state.alert.showUI);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const fetchProfileData = async () => {
            if (isLogin === true) {
                try {
                    const profileData = await getProfile(); // getProfile()의 Promise를 기다림
                    setProfile(profileData);
                } catch (error) {
                    console.error("프로필 데이터를 가져오는데 실패했습니다:", error);
                }
            }
        };
    
        fetchProfileData(); // 비동기 함수 호출
    }, [isLogin])

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
    
    //로그아웃
    const handleLogout = (e) => {
        e.preventDefault();
        postLogout();

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