import React from 'react'
import { IoCloseCircle } from "react-icons/io5";
import style from '../../css/pages/loginpage.module.css'

export default function LoginUI({
  showLoginUI,
  handleLogin,
  setEmail, 
  setPassword, 
  handleJoin,
  handleFindUser,
}) {

  return (
        <div className={style.frame}>

          <div className={style.header}>
            <IoCloseCircle size={30} color='#ffbb00' onClick={showLoginUI} />
          </div>

          <div className={style.loginBox}>           
              <div className={style.loginInput}>
                <input type='email' placeholder='이메일을 입력해주세요' onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='비밀번호를 입력해주세요' onChange={(e) => setPassword(e.target.value)}/>
                
                {/* 로그인 버튼 */}
                <button className={style.loginBtn} onClick={handleLogin}>로그인</button>
                
              </div>

              <div className={style.loginInfoBox}>
                <p onClick={handleJoin}>회원가입</p>
                <p onClick={handleFindUser}>아이디/비밀번호 찾기</p>
              </div>
          </div>   

        </div>

  )
}
