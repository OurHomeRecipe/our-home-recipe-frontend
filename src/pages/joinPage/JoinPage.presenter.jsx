import React from 'react'
import page from '../../css/pages/page.common.module.css'
import style from '../../css/pages/joinpage.module.css'
import BasicAlerts from '../../common/component/alert/basicAlert'

export default function JoinPageUI({
  alertSeverity,
  alertMessage,
  setLoginData,
  handleSubmitEmail,
  handleEmailConfirm,
  handleSubmitJoin
}) {
  return (
    <div className={page.frame}>
      {alertMessage && <BasicAlerts serverity={alertSeverity} message={alertMessage} />}
        <div className={style.frame}>

          <h1>회원가입</h1>

          <div className={style.joinBox}>
            <p>이메일</p>
            <input type='email' placeholder='이메일 형식에 맞게 작성해주세요' onChange={(e) => setLoginData(prev => ({...prev, email: e.target.value}))}/>
          </div>

          <button onClick={handleSubmitEmail}>이메일 인증 요청</button>

          <div className={style.joinBox}>
            <p>인증번호</p>
            <input type='text' placeholder='인증번호를 입력해주세요' onChange={(e) => setLoginData(prev => ({...prev, authCode: e.target.value}))}/>
          </div>

          <button onClick={handleEmailConfirm}>이메일 인증 확인</button>

          <div className={style.joinBox}>
            <p>닉네임</p>
            <input type='text' placeholder='최소 2글차 최대 12글자' onChange={(e) => setLoginData(prev => ({...prev, nickname: e.target.value}))}/>
          </div>

          <div className={style.joinBox}>
            <p>연락처</p>
            <input type='text' placeholder='연락처 형식에 맞게 작성해주세요' onChange={(e) => setLoginData(prev => ({...prev, phoneNumber: e.target.value}))}/>
          </div>

          <div className={style.joinBox}>
            <p>이름</p>
            <input type='text' placeholder='이름을 입력해주세요' onChange={(e) => setLoginData(prev => ({...prev, name: e.target.value}))}/>
          </div>

          <div className={style.joinBox}>
            <p>비밀번호</p>
            <input type='password' placeholder='최소 8글자, 영문, 특수문자, 숫자를 포함해주세요' onChange={(e) => setLoginData(prev => ({...prev, password: e.target.value}))}/>
          </div>

          <div className={style.joinBox}>
            <p>비밀번호 확인</p>
            <input type='password' placeholder='비밀번호를 다시 입력해주세요' onChange={(e) => setLoginData(prev => ({...prev, passwordConfirm: e.target.value}))}/>
          </div>

          <button onClick={handleSubmitJoin}>회원가입</button>

        </div>
    </div>
  )
}
