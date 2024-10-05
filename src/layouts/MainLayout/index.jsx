
import Sidebar from "./sidebar";
import {Outlet} from "react-router-dom";
import style from "../../css/mainlayout.module.css"
import Footer from "./footer";
import LoginPage from "../../pages/login/LoginPage.container";
import Header from "./header/header.container";
import SearchComponent from "./search/search.container";
import Alert from "./alert/alert.container";
import Modal from "../../common/modal/modal";
import { useAppSelector } from "../../RootStore";



export default function MainLayout(){

    //로그인 화면 보이는지 여부
    const isLogin = useAppSelector((state) => state.login.loginPageShow);


    return(
        <div className={style.frame}>

            <Header/>
            <SearchComponent/>
            <Sidebar/>
            <Outlet/>
            <Footer/>
            <Alert/>
            {isLogin ? <Modal><LoginPage/></Modal> : ''}
        </div>
    )
}