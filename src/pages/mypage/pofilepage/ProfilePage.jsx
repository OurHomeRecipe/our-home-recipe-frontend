import React, { useEffect, useState } from 'react'
import { useProfileQuery, useProfileUpdateQuery } from '../../../api/queries/profileQueries';
import {NickName, ProfileImg, UserInfo} from './ProfilePage.style';
import prf from '../../../css/pages/profilepage.module.css'
import {MdEdit} from "react-icons/md";
import useImageUpload from '../../../common/hook/useImageUpload';

export default function ProfilePage() {

    const {imgFile, preview, fileInputRef, handleIconClick, handleImageChange } = useImageUpload();
    const { profileImage, nickname, name, email, phoneNumber, introduce,} = useProfileQuery();
    const { profileUpdate } = useProfileUpdateQuery();

    const [ newProfile, setNewProfile] = useState({
        nickname: '',
        name: '',
        email: '',
        phoneNumber: '',
        profileImage: '',
        introduce: ''
    })

    useEffect(() => {
        setNewProfile((prev) => ({
            ...prev,
            nickname: nickname,
            name: name || '',       // 비어있을 수 있는 값 처리
            email: email || '',
            phoneNumber: phoneNumber || '',
            profileImage: profileImage || '',
            introduce: introduce
        }));
    }, [nickname, name, email, phoneNumber, profileImage, introduce]); 

    const [editState, setEditState] = useState({
        nickname: true,
        name: true,
        email: true,
        phoneNumber: true,
        profileImage: true,
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


    return (
        <div className={prf.frame}>
            <ProfileImg preview={preview === null ? newProfile.profileImage : preview} >
                <MdEdit className={prf.profileImageEdit} onClick={handleIconClick}/>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} style={{display: 'none'}}/>
            </ProfileImg>

            <div>
                <div className={prf.row}>
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

                <div className={prf.row}>
                    <p>이름</p>
                    <UserInfo
                        value={newProfile.name}
                        isReadOnly={editState.name}
                        onChange={(e) => setNewProfile(prev => ({
                            ...prev,
                            name: e.target.value
                        }))}
                    />
                </div>

                <div className={prf.row}>
                    <p>이메일</p>
                    <UserInfo
                        value={newProfile.email}
                        isReadOnly={editState.email}
                        onChange={(e) => setNewProfile(prev => ({
                            ...prev,
                            email: e.target.value
                        }))}
                    />
                </div>

                <div className={prf.row}>
                    <p>전화번호</p>
                    <UserInfo
                        value={newProfile.phoneNumber}
                        isReadOnly={editState.phoneNumber}
                        onChange={(e) => setNewProfile(prev => ({
                            ...prev,
                            phoneNumber: e.target.value
                        }))}
                    />
                </div>

                <div className={prf.row}>
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

            <button className={prf.saveButton} type='button' onClick={handleUpdateProfile}>저장</button>
        </div>
    );
}
