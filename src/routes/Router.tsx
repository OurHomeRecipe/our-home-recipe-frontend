import {useRoutes} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/mainpage/MainPage";
import JoinPage from "../pages/joinPage/JoinPage.container";
import FindUserPage from "../pages/finduserPage/FindUserPage.container";
import MyPagePage from "../layouts/MypageLayout/MyPage.container";
import ProfilePage from "../pages/mypage/pofilepage/ProfilePage.container";
import MyBoardPage from "../pages/mypage/myBoardPage/myBoardPage.container";
import AddRecipePage from "../pages/mypage/addRecipePage/addRecipePage.container";

import LoginPage from "../pages/login/LoginPage.container";
import { useAppSelector } from "../RootStore";

export default function Router() {

  const isLogin = useAppSelector((state) => state.login.loginState);

  return useRoutes([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        { index: true, element: <MainPage/> },
        { 
          path: 'mypage', 
          element: isLogin ? <MyPagePage/> : <LoginPage/> ,
          // element: <MyPagePage/>, 
          children:[
            { index: true, element: <ProfilePage/> },
            { path: 'like'},
            { path: 'myboards', element: <MyBoardPage/>},
            { path: 'follower'},
            { path: 'following'},
          ] },
        { path: 'join', element: <JoinPage/>},
        { path: 'finduser', element: <FindUserPage/>},
        { path: 'addrecipe', element: isLogin ? <AddRecipePage/> : <LoginPage/>}

        // { path: 'store', element: <StorePage />},
        // { path: 'review', element: <ReviewPage />}
      ],
    },
  ])
}
