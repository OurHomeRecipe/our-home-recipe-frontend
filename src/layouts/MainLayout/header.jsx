import { useContext, useEffect, useState } from "react";
import style from "../../css/mainlayout.module.css"
import header from "../../css/header.module.css"
import { RiMenuSearchLine } from "react-icons/ri";
import { SidebarContext } from "../../context/sidebarContext";
import { FaBell } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header(){

    // Router
    const navigate = useNavigate();
    const location = useLocation();  // 현재 위치를 가져오기 위한 hook

    // 사이드바 전역 상태관리
    const {changeSidebarMode} = useContext(SidebarContext);

    // 알림창 표시여부
    const [alertMessage, setAlertMessage] = useState(false);

    const showAlert = () => {
        setAlertMessage((prev) => !prev);
        console.log(alertMessage);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/login", { replace: true }); // URL을 바꾸되 페이지 새로고침 없음
    }

    useEffect(() => {
        // URL이 "/login"으로 변경될 때만 특정 동작을 수행
        if (location.pathname === "/login") {
            // 이곳에서 API 호출을 하거나 다른 동작을 수행할 수 있음
            console.log("Login URL detected. Perform API call here if necessary.");
        }
    }, [location]);

    

    return(
        <div className={style.header_frame}>
            <div className={style.header_logo}></div>

            <div className={style.header_menu}>
                <FaBell className={style.alertIcon} onClick={showAlert} />
                <button className={style.loginBtn} onClick={handleLogin}>Login</button>
                <p>고객센터</p>
                <RiMenuSearchLine className={style.sidebarIcon} onClick={() => changeSidebarMode()}/>
            </div>

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