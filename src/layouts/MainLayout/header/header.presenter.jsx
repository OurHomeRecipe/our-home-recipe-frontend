import style from "../../../css/mainlayout.module.css"
import header from "../../../css/header.module.css"
import { FaBell } from "react-icons/fa";
import { RiMenuSearchLine } from "react-icons/ri";
import styled from "styled-components";

const ProfileImageMini = styled.div`
    background: url(${(props) => props.preview}) no-repeat;
    background-size: 100%;
    width: 40px;
    height: 40px;
    background-color: lightgray;
    border-radius: 50px;
    cursor: pointer;
`


export default function HeaderUI({
    profileImage,nickname,
    isLogin,
    handleLogo,
    handleToggle,
    showAlert,
    handleProfil,
    handleLogin,
    handleLogout
}) {
  return (
    <div className={style.header_frame}>
    <div className={style.header_logo} onClick={handleLogo}></div>


        {isLogin 
            ?
            <div className={header.menuBox_login_true}>
                {/* 알림창 */}
                <FaBell className={style.alertIcon} onClick={showAlert} />

                <div className={header.profileBox}>
                    <ProfileImageMini preview={profileImage} onClick={handleProfil}></ProfileImageMini>
                    <p>{nickname}</p>
                    <button className={style.loginBtn} onClick={handleLogout}>Logout</button>
                </div>

                <p>고객센터</p>

                {/* 카테고리 */}
                <RiMenuSearchLine className={style.sidebarIcon} onClick={handleToggle}/>
            </div>
            :
            <div className={header.menuBox_login_false}>
                <button className={style.loginBtn} onClick={handleLogin}>Login</button>
                <p>고객센터</p>
                <RiMenuSearchLine className={style.sidebarIcon} onClick={handleToggle}/>
            </div>
            
        }

</div>
  )
}
