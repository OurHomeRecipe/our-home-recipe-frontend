import React, { useEffect, useState } from 'react'
import style from '../../../css/pages/page.common.module.css'
import prf from '../../../css/pages/profilepage.module.css'
import { MdEdit } from "react-icons/md";
import styled from 'styled-components';

const NickName = styled.input.attrs((props) => ({readOnly: props.isReadOnly, type:'text' }))`
    font-size: 18px;
    border: none;
    background-color: ${(props) => props.isReadOnly ? '#ffe191' : '#white'} ;
    border-radius: 10px;
    border: ${(props) => props.isReadOnly ? 'none' : '1px solid #ffe191'};
`

const UserInfo = styled.input.attrs((props) => ({readOnly: props.isReadOnly, type:'text' }))`
    font-size: 15px;
    border: none;
    background-color: ${(props) => props.isReadOnly ? '#ffe191' : '#white'} ;
    border-radius: 10px;
    border: ${(props) => props.isReadOnly ? 'none' : '1px solid #ffe191'};
`



export default function ProfileUI({profile}) {

  console.log(profile);

  const [nickname, setNickname] = useState('');
  const [nicknameEdit, setNickNameEdit] = useState(true);

  const [name, setName] = useState('');
  const [nameEdit, setNameEdit] = useState(true);

  useEffect(() => {
    if (profile && profile.nickname) {
      setNickname(profile.nickname);
      setName(profile.name)
    }
  }, [profile]); // profile이 변경될 때만 실행

  return (
    <div className={prf.frame}>

        <div className={prf.profileImage}>
          <MdEdit className={prf.profileImageEdit} />
        </div>
        
        <div>
          <div className={`${style.row}`}>
            <NickName value={nickname} isReadOnly={nicknameEdit} onChange={(e) => setNickname(e.target.value)}/>
            <MdEdit onClick={() => setNickNameEdit((edit) => !edit)} />
          </div>

          <div className={`${style.row}`}>
            <p>이름</p>
            <UserInfo value={name} isReadOnly={nameEdit} onChange={(e) => setName(e.target.value)}/>
            <MdEdit onClick={() => setNameEdit((edit) => !edit)}/>
          </div>

          <div className={`${style.row}`}>
            <textarea placeholder='자기소개를 입력할 수 있습니다.'/>
            <MdEdit />
          </div>
        </div>
    </div>
  )
}
