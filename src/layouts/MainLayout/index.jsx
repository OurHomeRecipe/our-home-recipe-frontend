import Header from "./header";
import Sidebar from "./sidebar";
import {Outlet} from "react-router-dom";
import style from "../../css/mainlayout.module.css"
import { IoSearch } from "react-icons/io5";
import Footer from "./footer";


export default function MainLayout(){

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
            </div>
    )
}