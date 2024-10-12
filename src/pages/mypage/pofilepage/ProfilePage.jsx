import React, { useEffect, useState } from 'react'
import { useProfileQuery, useProfileUpdateQuery } from '../../../api/queries/profileQueries';
import {NickName, ProfileImg, UserInfo} from './ProfilePage.style';
import style from '../../../css/pages/profilepage.module.css'
import {MdEdit} from "react-icons/md";
import useImageUpload from '../../../common/hook/useImageUpload';

export default function ProfilePage() {

    //이미지 업로드
    const {imgFile, preview, fileInputRef, handleIconClick, handleImageChange } = useImageUpload();
    
    //프로필 조회
    const { data, error, isLoading } = useProfileQuery(); 
    const { profileImage, nickname, name, email, phoneNumber, introduce,} = data || {};

    console.log(data);
    
    //프로필 수정
    const { profileUpdate } = useProfileUpdateQuery(); 

    const [ newProfile, setNewProfile] = useState({
        nickname : '',
        profileImage: '',
        introduce: ''
    })

    useEffect(() => {
        if (data) {
          setNewProfile({
            nickname: nickname || '', // 값이 없을 경우 빈 문자열로 설정
            profileImage: profileImage || '',
            introduce: introduce || ''
          });
        }
        setEditState({
            nickname: true,
            introduce: true
        })
      }, [nickname, profileImage, introduce, data]); // 데이터가 로드될 때마다 업데이트

    console.log(newProfile);

    const [editState, setEditState] = useState({
        nickname: true,
        introduce: true
    })

    // 수정된 부분 감지
    const detectChanges = () => {
        const updatedProfile = {};
    
        if (nickname !== newProfile.nickname)
            updatedProfile.nickname = newProfile.nickname;

        if (profileImage !== imgFile)
            updatedProfile.profileImage = imgFile; // 이미지 파일 객체

        if (introduce !== newProfile.introduce)
            updatedProfile.introduce = newProfile.introduce;
            
        return updatedProfile;
    };

    //프로필 업데이트
    const handleUpdateProfile = (e) => {
        e.preventDefault();
  
        const updatedData = detectChanges();
  
        if (Object.keys(updatedData).length === 0) {
            alert('변경된 사항이 없습니다.');
            return;
        }
  
        const formData = new FormData();
  
        formData.append('member',
            new Blob([JSON.stringify(updatedData)], {type:"application/json"})
        );
  
        if (updatedData.profileImage) {
            formData.append('profileImage', updatedData.profileImage); // 이미지 파일 객체 추가
        }

        profileUpdate(formData); //React Query  
    }

    if (isLoading) { return <div>Loading...</div>; }
    if (error) { return <div>Error: {error.message}</div>; }

    return (
        <div className={style.frame}>

            <div>
                <ProfileImg preview={preview === null ? newProfile.profileImage : preview} >
                    <MdEdit className={style.profileImageEdit} onClick={handleIconClick}/>
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} style={{display: 'none'}}/>
                </ProfileImg>

                <div className={style.row}>
                    <p>이름</p>
                    <p>{name}</p>
                </div>

                <div className={style.row}>
                    <p>이메일</p>
                    <p>{email}</p>
                </div>

                <div className={style.row}>
                    <p>전화번호</p>
                    <p>{phoneNumber}</p>
                </div>
            </div>


            <div>
                <div className={style.row}>
                    <p>닉네임</p>
                    <NickName
                        value={newProfile.nickname}
                        isReadOnly={editState.nickname}
                        onChange={(e) => setNewProfile(prev => ({
                            ...prev,
                            nickname: e.target.value
                        }))}
                    />
                    <MdEdit onClick={() => setEditState(prev => ({...prev, nickname: !prev.nickname}))}/>
                </div>

                <div className={style.row}>
                    <p>자기소개</p>
                    <UserInfo
                        value={newProfile.introduce}
                        isReadOnly={editState.introduce}
                        as="textarea"
                        onChange={(e) => setNewProfile(prev => ({
                            ...prev,
                            introduce: e.target.value
                        }))}
                    />
                    <MdEdit onClick={() => setEditState(prev => ({...prev, introduce: !prev.introduce}))}/>
                </div>
            </div>

            <button className={style.saveButton} type='button' onClick={handleUpdateProfile}>저장</button>
        </div>
    );
}
