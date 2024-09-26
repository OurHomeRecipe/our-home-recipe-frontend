import React from 'react'
import Modal from '../../common/modal/modal'
import style from '../../css/pages/loginpage.module.css'

export default function LoginUI() {
  return (
    <Modal>
        <div className={style.frame}>
            로그인화면
        </div>
    </Modal>
  )
}
