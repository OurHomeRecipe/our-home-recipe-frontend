import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../appmain/RootStore";
import { toggleSidebar } from "../../../features/sidebar/sidebarSlice";
import { toggleLoginPage, toggleLoginState } from "../../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";
import HeaderUI from "./header.presenter";
import { getProfile } from "../../../api/axios/get.me.profile";
import { toggleAlertUI } from "../../../features/alert/alertSlice";
import { postLogout } from "../../../api/axios/post.member.logout";
import { useMutation } from "@tanstack/react-query";


export default function Header(){


    const isLogin = useAppSelector((state) => state.login.loginState);
    const isAlertUI = useAppSelector((state) => state.alert.showUI);
    const [profile, setProfile] = useState([]);

    const getProfileApi = useMutation({mutationFn: async () => getProfile()});

    useEffect(() => {
        getProfileApi.mutate({},{
            onSuccess: (data) => {
                console.log('프로필 조회 성공', data);
                setProfile(data.data);
            },
            onError: (error) => {
                console.error('프로필 조회 실패', error);       
            }
        });

    }, [])

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