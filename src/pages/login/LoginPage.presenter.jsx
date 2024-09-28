import React from 'react'
import { IoCloseCircle } from "react-icons/io5";
import Modal from '../../common/modal/modal'
import style from '../../css/pages/loginpage.module.css'

export default function LoginUI({handleLogin}) {
  return (
    <Modal>
        <div className={style.frame}>

          <div className={style.header}>
            <IoCloseCircle size={30} color='#ffbb00' onClick={handleLogin} />
          </div>

          <div className={style.loginBox}>           
              <div className={style.loginInput}>
                <input type='email' placeholder='이메일을 입력해주세요'/>
                <input type='password' placeholder='비밀번호를 입력해주세요'/>
                <button className={style.loginBtn}>로그인</button>
              </div>

              <div className={style.loginInfoBox}>
                <p>회원가입</p>
                <p>아이디/비밀번호 찾기</p>
              </div>
          </div>


            
        </div>
    </Modal>
  )
}
