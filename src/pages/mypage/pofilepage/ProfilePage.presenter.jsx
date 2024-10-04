import React, { useEffect, useRef, useState } from 'react'
import prf from '../../../css/pages/profilepage.module.css'
import { MdEdit } from "react-icons/md";
import styled from 'styled-components';

const ProfileImg = styled.div`
    background: url(${(props) => props.preview}) no-repeat;
    background-size: 100%;
    width: 250px;
    height: 250px;
    background-color: lightgray;
    border-radius: 50%;
    position: relative;
`;

const NickName = styled.input.attrs((props) => ({readOnly: props.isReadOnly, type:'text' }))`
    font-size: 18px;
    border: none;
    background-color: ${(props) => props.isReadOnly ? '#ffe191' : 'white'} ;
    border-radius: 10px;
    border: ${(props) => props.isReadOnly ? 'none' : '1px solid #ffe191'};
`;

const UserInfo = styled.input.attrs((props) => ({readOnly: props.isReadOnly, type:'text' }))`
    font-size: 15px;
    border: none;
    background-color: ${(props) => props.isReadOnly ? '#ffe191' : 'white'} ;
    border-radius: 10px;
    border: ${(props) => props.isReadOnly ? 'none' : '1px solid #ffe191'};
`;

export default function ProfileUI({profile}) {

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); // 이미지 미리보기 상태
  const fileInputRef = useRef(null); // 파일 입력 필드 참조

  const [nickname, setNickname] = useState('');
  const [nicknameEdit, setNickNameEdit] = useState(true);

  const [name, setName] = useState('');
  const [nameEdit, setNameEdit] = useState(true);

  const [email, setEmail] = useState('');
  const [emailEdit, setEmailEdit] = useState(true);

  const [phonNumber, setPhonNumber] = useState('');
  const [phonNumberEdit, setPhonNumberEdit] = useState(true);

  useEffect(() => {
    if (profile && profile.nickname) {
      setNickname(profile.nickname);
      setName(profile.name);
      setEmail(profile.email);
      setPhonNumber(profile.phoneNumber);
    }
  }, [profile]); // profile이 변경될 때만 실행

  const handleIconClick = () => {
    fileInputRef.current.click(); // input 필드 트리거
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  console.log(preview);


  return (
    <div className={prf.frame}>

      <div>
        <ProfileImg preview={preview}>
          <MdEdit className={prf.profileImageEdit} onClick={handleIconClick} />
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
        </ProfileImg>

        <div className={prf.row}>
          <NickName value={nickname} isReadOnly={nicknameEdit} onChange={(e) => setNickname(e.target.value)} />
          <MdEdit onClick={() => setNickNameEdit((edit) => !edit)} />
        </div>
      </div>

        <div>
          <div className={prf.row}>
            <p>이름</p>
            <UserInfo value={name} isReadOnly={nameEdit} onChange={(e) => setName(e.target.value)} />
            <MdEdit onClick={() => setNameEdit((edit) => !edit)} />
          </div>

          <div className={prf.row}>
            <p>이메일</p>
            <UserInfo value={email} isReadOnly={emailEdit} onChange={(e) => setEmail(e.target.value)} />
            <MdEdit onClick={() => setEmailEdit((edit) => !edit)} />
          </div>

          <div className={prf.row}>
            <p>전화번호</p>
            <UserInfo value={phonNumber} isReadOnly={phonNumberEdit} onChange={(e) => setPhonNumber(e.target.value)} />
            <MdEdit onClick={() => setPhonNumberEdit((edit) => !edit)} />
          </div>

          <div className={prf.row}>
            <textarea placeholder='자기소개를 입력할 수 있습니다.'/>
            <MdEdit />
          </div>
        </div>

    </div>
  );
}
