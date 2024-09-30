import React from 'react'
import { IoCloseCircle } from "react-icons/io5";
import Modal from '../../common/modal/modal'
import style from '../../css/pages/loginpage.module.css'
import PostMemberLogin from '../../api/queries/post.member.login';

export default function LoginUI({
  email,
  password,
  handleLogin,
  setEmail, 
  setPassword, 
  handleJoin,
  handleFindUser
}) {
  return (
    <Modal>
        <div className={style.frame}>

          <div className={style.header}>
            <IoCloseCircle size={30} color='#ffbb00' onClick={handleLogin} />
          </div>

          <div className={style.loginBox}>           
              <div className={style.loginInput}>
                <input type='email' placeholder='이메일을 입력해주세요' onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='비밀번호를 입력해주세요' onChange={(e) => setPassword(e.target.value)}/>
                
                {/* 로그인 버튼 */}
                <PostMemberLogin email={email} password={password}/>
                
              </div>

              <div className={style.loginInfoBox}>
                <p onClick={handleJoin}>회원가입</p>
                <p onClick={handleFindUser}>아이디/비밀번호 찾기</p>
              </div>
          </div>   
        </div>
    </Modal>
  )
}
