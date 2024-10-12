import { useNavigate } from "react-router-dom";
import { useProfileQuery } from "../../../api/queries/profileQueries";
import { useLogoutQuery } from "../../../api/queries/loginQuery";
import { RiMenuSearchLine } from "react-icons/ri";
import RootStore from "../../../RootStore";
import { toggleSidebar } from "../../../features/sidebar/sidebarSlice";
import { toggleLoginPage } from "../../../features/login/loginSlice";
import UserInfo from "./header.userInfo";
import header from "../../../css/header.module.css"
import style from "../../../css/mainlayout.module.css"
import { toggleAlertUI } from "../../../features/alert/alertSlice";



export default function Header(){

    //Redux-Toolkit
    const isLogin = RootStore.getState().login.loginState;
    
    //프로필 조회
    const { data, error, isLoading } = useProfileQuery(); 
    const { profileImage, nickname} = data || {};
    const {logOut} = useLogoutQuery();
    
    //React-Router
    const navigate = useNavigate();

    const showAlert = () => {
        RootStore.dispatch(toggleAlertUI());
    }

    const showLoginModal = () => RootStore.dispatch(toggleLoginPage(true));

    if (isLoading) { return <div>Loading...</div>; }
    if (error) { console.error(error); }
    
    return(
        <div className={header.frame}>
        <div className={header.left_content} onClick={()=> navigate('/')}></div>

        <div className={header.right_content}>
            {isLogin ? 
                <UserInfo 
                    showAlert={showAlert} 
                    profileImage={profileImage} 
                    nickname={nickname}
                    navigate={navigate}
                /> : 
            ''}
            {isLogin ? 
                <button className={style.loginBtn} onClick={logOut}>Logout</button> : 
                <button className={style.loginBtn} onClick={showLoginModal}>Login</button>
            }
            <p>고객센터</p>
            <RiMenuSearchLine className={style.sidebarIcon} onClick={ () => RootStore.dispatch(toggleSidebar())}/>
        </div>        

    </div>
    )
}