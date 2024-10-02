import React, { useState } from 'react'
import MyPageUI from './MyPage.presenter'
import { useNavigate } from 'react-router-dom';

export interface MenuItem {
  id: number;
  name: string;
  url: string;
}

export default function MyPagePage() {

  // useNavigate 훅 사용
  const navigate = useNavigate(); 

  const [seletedMenu, setSelectedMenu] = useState<number>(1);


  const menu: MenuItem[] = [
    { id: 1, name: 'My Profile', url:'mypage'},
    { id: 2, name: '좋아요 목록', url:'mypage/like'},
    { id: 3, name: '나의 게시글', url:'mypage/myboards' },
    { id: 4, name: '팔로워', url:'mypage/follower' },
    { id: 5, name: '팔로잉', url:'mypage/following' },
  ]

  const handleMenu = (menuId:number, menuUrl:string) => {
    setSelectedMenu(menuId);
    navigate(`/${menuUrl}`)
  }

  return (
    <MyPageUI
      selectedMenu={seletedMenu}
      handleMenu={handleMenu}
      menu={menu}
    />
  )
}
