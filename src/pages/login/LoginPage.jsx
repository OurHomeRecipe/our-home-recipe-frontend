import { useState } from 'react'
import { toggleLoginPage } from '../../features/login/loginSlice';
import { IoCloseCircle } from "react-icons/io5";
import style from '../../css/pages/loginpage.module.css'
import { useNavigate } from 'react-router-dom';
import { useLoginQuery } from '../../api/queries/loginQuery';
import { useAppDispatch } from '../../RootStore';

export default function LoginPage() {

  //로그인시 api로 보내기 위한 상태값
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 React Query
  const {login} = useLoginQuery()

  // react-router: 페이지 이동
  const navigate = useNavigate(); 

  // Redux-Toolkit: 전역상태 관리
  const dispatch = useAppDispatch();

  const handleJoin = () => {
    navigate('/join'); //회원가입 페이지로 이동
    dispatch(toggleLoginPage(false)); //모달창 닫기
  }

  const handleFindUser = () => {
    navigate('/finduser'); //아이디,비밀번호 찾기 페이지로 이동
    dispatch(toggleLoginPage(false)); //모달창 닫기
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin(); // 엔터키를 눌렀을 때 로그인
    }
  };

  const handleLogin = (e) => {
    login(email, password)
  }

  return (
    <div className={style.frame}>

      <div className={style.header}>
        {/* 닫기 버튼 */}
        <IoCloseCircle 
          size={30} 
          color='#ffbb00' 
          onClick={()=>
          dispatch(toggleLoginPage(false)) //모달창 닫기
        } />
      </div>

      <div className={style.loginBox}>           
          <div className={style.loginInput}>
            <input type='email' placeholder='이메일을 입력해주세요' onChange={(e) => setEmail(e.target.value)} onKeyDown={handleKeyDown}/>
            <input type='password' placeholder='비밀번호를 입력해주세요' onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDown}/>
            
            {/* 로그인 버튼 */}
            <button className={style.loginBtn} onClick={()=>login(email, password)}>로그인</button>            
          </div>

          <div className={style.loginInfoBox}>
            <p onClick={handleJoin}>회원가입</p>
            <p onClick={handleFindUser}>아이디/비밀번호 찾기</p>
          </div>
      </div>   
    </div>

)
}
