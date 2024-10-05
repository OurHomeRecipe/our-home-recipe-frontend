import React, { useEffect, useRef, useState } from 'react'
import ProfileUI from './ProfilePage.presenter';
import { useProfileQuery, useProfileUpdateQuery } from '../../../api/queries/profileQueries';

export default function ProfilePage() {
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
        profileImage: true
    })

    const [preview, setPreview] = useState(null); // 이미지 미리보기 상태
    const fileInputRef = useRef(null); // 파일 입력 필드 참조

    const handleIconClick = () => {
        // input태그 대신 MdEdit 아이콘을 클릭했을 때 파일 선택창이 열리도록
        fileInputRef.current.click(); // input 필드 트리거
    };

    // 이미지 선택
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // 미리보기 설정
                setPreview(reader.result);
            };
            reader.readAsDataURL(file); // Base64로 변환된 이미지 데이터를 미리보기로 설정
            setNewProfile(prev => ({...prev, profileImage: file})); // 파일 객체를 상태로 저장
        }
    };

    // 수정된 부분 감지
    const detectChanges = () => {
        const updatedProfile = {};
    
        if (nickname !== newProfile.nickname)
            updatedProfile.nickname = newProfile.nickname;
        
        if (name !== newProfile.name) 
            updatedProfile.name = newProfile.name;
        
        if (email !== newProfile.email) 
            updatedProfile.email = newProfile.email;
        
        if (phoneNumber !== newProfile.phoneNumber) 
            updatedProfile.phoneNumber = newProfile.phoneNumber;
        
        if (profileImage !== newProfile.profileImage) 
            updatedProfile.profileImage = newProfile.profileImage; // 이미지 파일 객체
            
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

        profileUpdate(formData);
    }


  return (
    <ProfileUI 
        profileImage={profileImage}
        nickname={nickname}
        name={name}
        email={email}
        phoneNumber={phoneNumber}
        introduce={introduce}
        preview={preview}
        fileInputRef={fileInputRef}
        newProfile={newProfile}
        editState={editState}

        setEditState={setEditState}
        setNewProfile={setNewProfile}
        handleIconClick={handleIconClick}
        handleImageChange={handleImageChange}
        handleUpdateProfile={handleUpdateProfile}
    />
  )
}
