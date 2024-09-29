import React from 'react'
import page from '../../css/pages/page.common.module.css'
import style from '../../css/pages/joinpage.module.css'
import PostEmailAuth from '../../api/queries/post.emailAuth'
import GetEmailAuth from '../../api/queries/get.emailAuth'

export default function JoinPageUI({
  email,
  authCode,
  setEmail,
  setAuthCode
}) {
  return (
    <div className={page.frame}>
        <div className={style.frame}>

          <h1>회원가입</h1>

          <div className={style.joinBox}>
            <p>이메일</p>
            <input type='email' placeholder='이메일 형식에 맞게 작성해주세요' onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <PostEmailAuth email={email}/>

          <div className={style.joinBox}>
            <p>인증번호</p>
            <input type='text' placeholder='인증번호를 입력해주세요' onChange={(e) => setAuthCode(e.target.value)}/>
          </div>

          <GetEmailAuth email={email} authCode={authCode}/>

          <div className={style.joinBox}>
            <p>닉네임</p>
            <input type='text' placeholder='최소 2글차 최대 12글자'/>
          </div>

          <div className={style.joinBox}>
            <p>연락처</p>
            <input type='text' placeholder='연락처 형식에 맞게 작성해주세요'/>
          </div>

          <div className={style.joinBox}>
            <p>이름</p>
            <input type='text' placeholder='이름을 입력해주세요'/>
          </div>

          <div className={style.joinBox}>
            <p>비밀번호</p>
            <input type='password' placeholder='최소 8글자, 영문, 숫자를 포함해주세요'/>
          </div>

          <div className={style.joinBox}>
            <p>비밀번호 확인</p>
            <input type='password' placeholder='연락처 형식에 맞게 작성해주세요'/>
          </div>

          <button type='button' className={style.joinButton}>회원가입</button>

        </div>
    </div>
  )
}
