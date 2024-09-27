import React from 'react'
import page from '../../css/pages/page.common.module.css'
import style from '../../css/pages/mypage.module.css'
import { Outlet } from 'react-router-dom'

export default function MyPageUI() {
  return (
    <div className={page.frame}>
        <div className={style.btnFrame}>
            <div className={style.menuBtn}>My Profile</div>
            <div className={style.menuBtn}>좋아요 목록</div>
            <div className={style.menuBtn}>나의 게시글</div>
            <div className={style.menuBtn}>팔로워</div>
            <div className={style.menuBtn}>팔로잉</div>
        </div>
        <div className={style.containerFrame}>
            <Outlet/>
        </div>
    </div>
  )
}
