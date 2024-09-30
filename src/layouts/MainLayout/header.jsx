import { useState } from "react";
import style from "../../css/mainlayout.module.css"
import header from "../../css/header.module.css"
import { RiMenuSearchLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../appmain/RootStore";
import { toggleSidebar } from "../../features/sidebar/sidebarSlice";
import { toggleLoginPage, toggleLoginState } from "../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";


export default function Header(){


    const isLogin = useAppSelector((state) => state.login.loginState);

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

    //로그인
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(toggleLoginPage(true))
    }    

    return(
        <div className={style.header_frame}>
            <div className={style.header_logo} onClick={() => navigate('/')}></div>


                {isLogin 
                    ?
                    <div className={header.menuBox_login_true}>
                        <FaBell className={style.alertIcon} onClick={showAlert} />
                        <div className={header.profileBox}>
                            <p>닉네임</p>
                            <div className={header.profile} onClick={() => navigate('/mypage')}></div>
                            <button className={style.loginBtn} onClick={() => dispatch(toggleLoginState(false))}>Logout</button>
                        </div>
                        <p>고객센터</p>
                        <RiMenuSearchLine className={style.sidebarIcon} onClick={handleToggle}/>
                    </div>
                    :
                    <div className={header.menuBox_login_false}>
                        <FaBell className={style.alertIcon} onClick={showAlert} />
                        <button className={style.loginBtn} onClick={handleLogin}>Login</button>
                        <p>고객센터</p>
                        <RiMenuSearchLine className={style.sidebarIcon} onClick={handleToggle}/>
                    </div>
                    
                }


            {/* 알림창 */}
            <div className={`${header.messageBox} ${alertMessage ? header.alertShow : header.alertHide}`}>
                <p>알림1</p>
                <p>알림2</p>
                <p>알림3</p>
                <p>알림4</p>
            </div>
        </div>
    )
}