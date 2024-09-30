import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../appmain/RootStore';
import { getProfile } from '../../../api/axios/get.me.profile';
import ProfileUI from './ProfilePage.presenter';

export default function ProfilePage() {

  const isLogin = useAppSelector((state) => state.login.loginState);
  const [profile, setProfile] = useState([]);


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

  return (
    <ProfileUI profile={profile}/>
  )
}
