import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../appmain/RootStore";
import { toggleSidebar } from "../../../features/sidebar/sidebarSlice";
import { toggleLoginPage } from "../../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";
import HeaderUI from "./header.presenter";
import { getProfile } from "../../../api/axios/get.me.profile";


export default function Header(){


    const isLogin = useAppSelector((state) => state.login.loginState);
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

    // 알림창
    const [alertMessage, setAlertMessage] = useState(false);

    const showAlert = () => {
        setAlertMessage((prev) => !prev);
        console.log(alertMessage);
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

    }

    return(
        <HeaderUI
        isLogin={isLogin}
        handleLogo={handleLogo}
        profile={profile}
        handleToggle={handleToggle}
        alertMessage={alertMessage}
        showAlert={showAlert}
        handleProfil={handleProfil}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        />
    )
}