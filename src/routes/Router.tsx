import {useRoutes} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/mainpage/MainPage";
import MypagePage from "../pages/mypage/MyPage";
import ProfilePage from "../pages/mypage/pofilepage/ProfilePage";
import SamplePage from "../pages/sample/SamplePage";
import JoinPage from "../pages/joinPage/JoinPage.container";
import FindUserPage from "../pages/finduserPage/FindUserPage.container";

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        { index: true, element: <MainPage/> },
        { 
          path: 'mypage', 
          element: <MypagePage/>, 
          children:[
            { index: true, element: <ProfilePage/> },
          ] },
        { path: 'sample', element: <SamplePage />},
        { path: 'join', element: <JoinPage/>},
        { path: 'finduser', element: <FindUserPage/>}
        // { path: 'store', element: <StorePage />},
        // { path: 'review', element: <ReviewPage />}
      ],
    },
  ])
}
