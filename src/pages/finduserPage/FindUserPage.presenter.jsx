import React from 'react'
import {InputBox} from "./FindUserPage.style";
import style from '../../css/pages/finduserpage.module.css'

export default function FindUserUI({data, setData, resetPassword}) {
  return (
      <div className={style.frame}>
          <h1>비밀번호 찾기</h1>

          <div className={style.row}>
              <p>이메일: </p>
              <InputBox
                  placeholder={'example@test.com'}
                  value={data.email}
                  onChange={(e) => setData(prev => ({
                      ...prev,
                      email: e.target.value
                  }))}
              />
          </div>

          <div className={style.row}>
              <p>이름: </p>
              <InputBox
                  placeholder={'테스트'}
                  value={data.name}
                  onChange={(e) => setData(prev => ({
                      ...prev,
                      name: e.target.value
                  }))}
              />
          </div>

          <div className={style.row}>
              <p>핸드폰 번호: </p>
              <InputBox
                  placeholder={'010-1234-5678'}
                  value={data.phoneNumber}
                  onChange={(e) => setData(prev => ({
                      ...prev,
                      phoneNumber: e.target.value
                  }))}
              />
          </div>

          <button className={style.button} onClick={resetPassword}>비밀번호 찾기</button>
      </div>
  )
}
