import {useRoutes} from "react-router-dom";
import { useAppSelector } from "../RootStore";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/mainpage/MainPage";
import FindUserPage from "../pages/finduserPage/FindUserPage.container";
import MyPagePage from "../layouts/MypageLayout/MyPage.container";
import LoginPage from "../pages/login/LoginPage";
import AddRecipePage from "../pages/mypage/addRecipePage/addRecipePage";
import MyBoardPage from "../pages/mypage/myBoardPage/myBoardPage";
import ProfilePage from "../pages/mypage/pofilepage/ProfilePage";
import JoinPage from "../pages/joinPage/JoinPage";



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
