import { FaBell } from "react-icons/fa";
import header from "../../../css/header.module.css"
import style from "../../../css/mainlayout.module.css"
import styled from "styled-components";

const ProfileImageMini = styled.div`
    background: url(${(props) => props.preview}) no-repeat;
    background-size: 100%;
    width: 40px;
    height: 40px;
    background-color: lightgray;
    border-radius: 50px;
    margin: 0px 20px;
    cursor: pointer;
`

export default function UserInfo({profileImage,nickname, showAlert, navigate}) {
  return (
    <div className={header.userInfoBox}>
        {/* 알림창 */}
        <FaBell className={style.alertIcon} onClick={showAlert} />
        <ProfileImageMini preview={profileImage} onClick={() => navigate('/mypage')}/>
        <p>{nickname}</p>
    </div>
  )
}
