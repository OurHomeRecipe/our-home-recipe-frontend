import {useRoutes} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/mainpage/MainPage";
import SamplePage from "../pages/sample/SamplePage";
import JoinPage from "../pages/joinPage/JoinPage.container";
import FindUserPage from "../pages/finduserPage/FindUserPage.container";
import MyPagePage from "../layouts/MypageLayout/MyPage.container";
import ProfilePage from "../pages/mypage/pofilepage/ProfilePage.container";
import MyBoardPage from "../pages/mypage/myBoardPage/myBoardPage.container";
import AddRecipePage from "../pages/mypage/addRecipePage/addRecipePage.container";

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        { index: true, element: <MainPage/> },
        { 
          path: 'mypage', 
          element: <MyPagePage/>, 
          children:[
            { index: true, element: <ProfilePage/> },
            { path: 'like'},
            { path: 'myboards', element: <MyBoardPage/>},
            { path: 'follower'},
            { path: 'following'},
          ] },
        { path: 'sample', element: <SamplePage />},
        { path: 'join', element: <JoinPage/>},
        { path: 'finduser', element: <FindUserPage/>},
        { path: 'addrecipe', element: <AddRecipePage/> }

        // { path: 'store', element: <StorePage />},
        // { path: 'review', element: <ReviewPage />}
      ],
    },
  ])
}
