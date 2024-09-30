import React from 'react'
import style from '../../../css/pages/page.common.module.css'
import prf from '../../../css/pages/profilepage.module.css'
import { MdEdit } from "react-icons/md";

export default function ProfileUI({profile}) {
  return (
    <div className={prf.frame}>

        <div className={prf.profileImage}>
          <MdEdit className={prf.profileImageEdit} />
        </div>
        
        <div>
          <div className={`${style.row}`}>
            <h1>{profile.nickname}</h1>
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
