import { useState } from 'react'
import style from './style/joinpage.module.css'
import { postRegister } from '../../api/axios/member/emailApi';
import { useNavigate } from 'react-router-dom';
import RootStore, { useAppSelector } from '../../RootStore';
import { toggleAlertMessage, toggleAlertServerity } from '../../features/alert/alertSlice';
import BasicAlerts from '../../common/component/alert/basicAlert'
import page from '../../css/pages/page.common.module.css'
import { useEmailAuthConfirmQuery, useEmailAuthQuery } from '../../api/queries/joinQueries';

export default function JoinPage() {

  const {alertSeverity, alertMessage} = useAppSelector(state => state.alert);
  const {emailAuth} = useEmailAuthQuery(); //이메일 인증코드 요청
  const {emailAuthConfirm} = useEmailAuthConfirmQuery(); //인증코드 확인
  // useNavigate 훅 사용
  const navigate = useNavigate(); 

  const [loginData, setLoginData] = useState({
    email: '',
    authCode: '',
    nickname: '',
    phoneNumber: '',
    name: '',
    password: '',
    passwordConfirm: '',
  })

  const handleSubmitEmail = async(e) => {
    e.preventDefault();
    emailAuth(loginData.email); //이메일 인증 요청
  };

  const handleEmailConfirm = async(e) => {
    if(loginData.authCode === ''){
      RootStore.dispatch(toggleAlertServerity("info"));
      RootStore.dispatch(toggleAlertMessage("올바른 인증번호를 입력해주세요"));
      return;
    }
    e.preventDefault();
    emailAuthConfirm(loginData.email, loginData.authCode);
};

const handleSubmitJoin = async(e) => {
  e.preventDefault();
  try {
      const data = await postRegister(loginData);
      console.log('회원가입 성공:', data);
      alert('회원가입을 축하합니다');
      navigate('/');
  } catch (error) {
      alert(error.errorMessage);
  }
};

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
