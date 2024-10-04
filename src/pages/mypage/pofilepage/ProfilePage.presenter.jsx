import React, {useEffect, useRef, useState} from 'react'
import prf from '../../../css/pages/profilepage.module.css'
import {MdEdit} from "react-icons/md";
import {NickName, ProfileImg, UserInfo} from './ProfilePage.style';
import {useMutation} from '@tanstack/react-query';
import {updateProfile} from '../../../api/axios/post.me.profile';


export default function ProfileUI({profile}) {


    const [profileImage, setProfileImage] = useState(null);

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

    const [introduce, setIntroduce] = useState(null);

    // 초기 상태 저장
    const [initialProfile, setInitialProfile] = useState({
        nickname: '',
        name: '',
        email: '',
        phonNumber: '',
        profileImage: ''
    });

    useEffect(() => {
        if (profile && profile.nickname) {
            setNickname(profile.nickname);
            setName(profile.name);
            setEmail(profile.email);
            setPhonNumber(profile.phoneNumber);
            setPreview(profile.profileImage);

            setInitialProfile({
                nickname: profile.nickname,
                name: profile.name,
                email: profile.email,
                phonNumber: profile.phoneNumber,
                profileImage: profile.profileImage
            });
        }
    }, [profile]); // profile이 변경될 때만 실행

    const handleIconClick = () => {
        fileInputRef.current.click(); // input 필드 트리거
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result); // 미리보기 설정
            };
            reader.readAsDataURL(file); // Base64로 변환된 이미지 데이터를 미리보기로 설정
            setProfileImage(file); // 파일 객체를 상태로 저장
        }
    };

    // 수정된 부분 감지
    const detectChanges = () => {
        const updatedProfile = {};

        if (nickname !== initialProfile.nickname) {
            updatedProfile.nickname = nickname;
        }
        if (name !== initialProfile.name) {
            updatedProfile.name = name;
        }
        if (email !== initialProfile.email) {
            updatedProfile.email = email;
        }
        if (phonNumber !== initialProfile.phonNumber) {
            updatedProfile.phonNumber = phonNumber;
        }
        if (preview !== initialProfile.profileImage) {
            updatedProfile.profileImage = profileImage; // 이미지 파일 객체
        }

        return updatedProfile;
    };

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

        updateProfileApi.mutate(
            formData,
            {
                onSuccess: (data) => {
                    console.log('프로필 업데이트 성공', data);
                    alert('프로필이 수정되었습니다.');
                    setInitialProfile({
                        nickname: nickname,
                        name: name,
                        email: email,
                        phonNumber: phonNumber,
                        profileImage: preview,
                    });
                },
            },
            {
                onError: (error) => {
                    console.error('프로필 수정 실패:', error);
                }
            }
        );
    }

    const updateProfileApi = useMutation({mutationFn: async (profileData) => updateProfile(profileData)})


    return (
        <div className={prf.frame}>

            <div>
                <ProfileImg preview={preview}>
                    <MdEdit className={prf.profileImageEdit} onClick={handleIconClick}/>
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange}
                           style={{display: 'none'}}/>
                </ProfileImg>

                <div className={prf.row}>
                    <NickName value={nickname} isReadOnly={nicknameEdit} onChange={(e) => setNickname(e.target.value)}/>
                    <MdEdit onClick={() => setNickNameEdit((edit) => !edit)}/>
                </div>
            </div>

            <div>
                <div className={prf.row}>
                    <p>이름</p>
                    <UserInfo value={name} isReadOnly={nameEdit} onChange={(e) => setName(e.target.value)}/>
                    <MdEdit onClick={() => setNameEdit((edit) => !edit)}/>
                </div>

                <div className={prf.row}>
                    <p>이메일</p>
                    <UserInfo value={email} isReadOnly={emailEdit} onChange={(e) => setEmail(e.target.value)}/>
                    <MdEdit onClick={() => setEmailEdit((edit) => !edit)}/>
                </div>

                <div className={prf.row}>
                    <p>전화번호</p>
                    <UserInfo value={phonNumber} isReadOnly={phonNumberEdit}
                              onChange={(e) => setPhonNumber(e.target.value)}/>
                    <MdEdit onClick={() => setPhonNumberEdit((edit) => !edit)}/>
                </div>

                <div className={prf.row}>


                    <textarea placeholder='자기소개를 입력할 수 있습니다.'/>
                    <MdEdit/>
                </div>
            </div>

            <button className={prf.saveButton} onClick={handleUpdateProfile} type='button'>저장</button>

        </div>
    );
}
