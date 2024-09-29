import React from 'react'
import page from '../../css/pages/page.common.module.css'
import style from '../../css/pages/joinpage.module.css'
import PostEmailAuth from '../../api/queries/post.emailAuth'
import GetEmailAuth from '../../api/queries/get.emailAuth'
import PostMemberRegister from '../../api/queries/post.member.register'

export default function JoinPageUI({
  email,
  authCode,
  nickname,
  password,
  phoneNumber,
  userName,
  setNickName,
  setPassword,
  passwordConfirm,
  setPasswordConfirm,
  setPhoneNumber,
  setUserName,
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
            <input type='text' placeholder='최소 2글차 최대 12글자' onChange={(e) => setNickName(e.target.value)}/>
          </div>

          <div className={style.joinBox}>
            <p>연락처</p>
            <input type='text' placeholder='연락처 형식에 맞게 작성해주세요' onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>

          <div className={style.joinBox}>
            <p>이름</p>
            <input type='text' placeholder='이름을 입력해주세요' onChange={(e) => setUserName(e.target.value)}/>
          </div>

          <div className={style.joinBox}>
            <p>비밀번호</p>
            <input type='password' placeholder='최소 8글자, 영문, 특수문자, 숫자를 포함해주세요' onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className={style.joinBox}>
            <p>비밀번호 확인</p>
            <input type='password' placeholder='비밀번호를 다시 입력해주세요' onChange={(e) => setPasswordConfirm(e.target.value)}/>
          </div>

          <PostMemberRegister
            email={email}
            nickname={nickname}
            phoneNumber={phoneNumber}
            name={userName}
            password={password}
            passwordConfirm={passwordConfirm}
          />

        </div>
    </div>
  )
}
