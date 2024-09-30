import page from '../../css/pages/page.common.module.css'
import style from '../../css/pages/mypage.module.css'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { MenuItem } from './MyPage.container';

interface MyPageUIProps {
  selectedMenu: number; // 선택된 메뉴
  handleMenu: (menuId: number, menuName: string) => void; // 상태 변경 함수
  menu: MenuItem[]; // 메뉴 아이템 배열
}

const MypageMenu = styled.div<{ selected: boolean }>`
background-color: ${({ selected }) => (selected ? '#ffbb00' : '#ffe190')};
color: ${({ selected }) => (selected ? 'white' : '#7e6216')};
border: 1px solid #ffbb00;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
width: 130px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'CookieRun-Regular';
font-size: 15px;
font-weight: 700;
cursor: pointer;
`

 const MyPageUI: React.FC<MyPageUIProps> = ({selectedMenu, handleMenu, menu}) => {

  return (
    <div className={page.frame}>
        <div className={style.btnFrame}>
          {menu.map((menu) => 
            <MypageMenu key={menu.id} selected={selectedMenu === menu.id} onClick={()=>handleMenu(menu.id, menu.url)}>
              {menu.name}
            </MypageMenu>)}
        </div>
        <div className={style.containerFrame}>
            <Outlet/>
        </div>
    </div>
  )
}

export default MyPageUI;
