import React from 'react'
import style from "../../../css/mainlayout.module.css"
import header from "../../../css/header.module.css"
import { FaBell } from "react-icons/fa";
import { RiMenuSearchLine } from "react-icons/ri";


export default function HeaderUI({
    isLogin,
    profile,
    handleLogo,
    handleToggle,
    alertMessage,
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
                <FaBell className={style.alertIcon} onClick={showAlert} />
                <div className={header.profileBox}>
                    <div className={header.profile} onClick={handleProfil}></div>
                    <p>{profile.nickname}</p>
                    <button className={style.loginBtn} onClick={handleLogout}>Logout</button>
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
