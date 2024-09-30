import Header from "./header";
import Sidebar from "./sidebar";
import {Outlet} from "react-router-dom";
import style from "../../css/mainlayout.module.css"
import { IoSearch } from "react-icons/io5";
import Footer from "./footer";
import { useAppSelector } from "../../appmain/RootStore";
import LoginPage from "../../pages/login/LoginPage.container";



export default function MainLayout(){

    //로그인 화면 보이는지 여부
    const isLogin = useAppSelector((state) => state.login.loginPageShow);


    return(
        <div className={style.frame}>

            <Header/>

            <div className={style.search_frame}>
                <input type="text" className={style.searchBox} placeholder="검색어를 입력해주세요."/>
                <IoSearch size={40} color="#ffbb00" />
            </div>

            <Sidebar/>
            <Outlet/>
            <Footer/>

            {isLogin ? <LoginPage/> : ''}
        </div>
    )
}