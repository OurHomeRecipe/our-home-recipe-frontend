import {useRoutes} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/mainpage/MainPage";
import LoginPage from "../pages/login/LoginPage";

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        { index: true, element: <MainPage/> },
        // { path: 'store', element: <StorePage />},
        // { path: 'review', element: <ReviewPage />}
      ],
    }
  ])
}
