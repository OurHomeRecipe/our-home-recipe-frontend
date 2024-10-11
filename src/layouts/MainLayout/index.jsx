
import Sidebar from "./sidebar";
import {Outlet} from "react-router-dom";
import style from "../../css/mainlayout.module.css"
import Footer from "./footer";
import LoginPage from "../../pages/login/LoginPage";
import Alert from "./alert/alert.container";
import Modal from "../../common/modal/modal";
import RootStore, { useAppSelector } from "../../RootStore";
import Header from "./header/header";
import SearchBar from "./searchbar/searchBar";
import { toggleSearchContent } from "../../features/search/searchSlice";



export default function MainLayout(){

    // 처음엔 모두 조회
    RootStore.dispatch(toggleSearchContent(''));

    //로그인 화면 보이는지 여부
    const isLoginModal = useAppSelector((state) => state.login.loginPageShow);


    return(
        <div className={style.frame}>

            <Header/>
            <SearchBar/>
            <Sidebar/>
            <Outlet/>
            <Footer/>
            <Alert/>

            {isLoginModal ? <Modal><LoginPage/></Modal> : ''}
        </div>
    )
}