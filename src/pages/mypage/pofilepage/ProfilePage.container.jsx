import React, { useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../../../appmain/RootStore';
import { getProfile } from '../../../api/axios/get.me.profile';
import ProfileUI from './ProfilePage.presenter';
import { updateProfile } from '../../../api/axios/post.me.profile';
import { useMutation } from '@tanstack/react-query';

export default function ProfilePage() {

  //로그인 상태
  const isLogin = useAppSelector((state) => state.login.loginState);

  const [profile, setProfile] = useState([]);
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

  // isLogin이 변경될 때만 실행
  useEffect(() => {
    const fetchProfileData = async () => {
        if (isLogin === true) {
            try {
                const profileData = await getProfile(); // getProfile()의 Promise를 기다림
                console.log(profileData); // 실제 데이터 출력
                setProfile(profileData);
            } catch (error) {
                console.error("프로필 데이터를 가져오는데 실패했습니다:", error);
            }
        }
    };
    fetchProfileData();
}, [isLogin])

  // profile이 변경될 때만 실행
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
  }, [profile]);

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
    <ProfileUI 
    preview={preview}
    nickname={nickname}
    nicknameEdit={nicknameEdit}
    name={name}
    nameEdit={nameEdit}
    email={email}
    emailEdit={emailEdit}
    phonNumber={phonNumber}
    phonNumberEdit={phonNumberEdit}
    handleIconClick={handleIconClick}
    handleImageChange={handleImageChange}
    fileInputRef={fileInputRef}
    setNickname={setNickname}
    setNickNameEdit={setNickNameEdit}
    setName={setName}
    setNameEdit={setNameEdit}
    setEmail={setEmail}
    setEmailEdit={setEmailEdit}
    setPhonNumber={setPhonNumber}
    setPhonNumberEdit={setPhonNumberEdit}
    handleUpdateProfile={handleUpdateProfile}
    />
  )
}
