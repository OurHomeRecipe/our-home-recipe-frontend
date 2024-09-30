import React from 'react'
import style from '../../../css/pages/page.common.module.css'
import profile from '../../../css/pages/profilepage.module.css'
import { MdEdit } from "react-icons/md";

export default function ProfileUI() {
  return (
    <div className={profile.frame}>
        <div className={profile.profileImage}>
          <MdEdit className={profile.profileImageEdit} />
        </div>
        <div>
          <div className={`${style.row}`}>
            <h1>닉네임</h1>
            <MdEdit />
          </div>
          <div className={`${style.row}`}>
            <p>자기소개를 입력할 수 있습니다.</p>
            <MdEdit />
          </div>  
        </div>
    </div>
  )
}
