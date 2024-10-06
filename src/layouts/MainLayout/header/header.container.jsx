import { useNavigate } from "react-router-dom";
import HeaderUI from "./header.presenter";
import { useProfileQuery } from "../../../api/queries/profileQueries";
import  {useAppSelector } from "../../../RootStore";
import { useLogoutQuery } from "../../../api/queries/loginQuery";

export default function Header(){

    //Redux-Toolkit
    const isAlertUI = useAppSelector((state) => state.alert.showUI);

    //React-Query
    const {profileImage, nickname} = useProfileQuery();
    const {logOut} = useLogoutQuery();

    //React-Router
    const navigate = useNavigate(); 

    return(
        <HeaderUI
            isAlertUI={isAlertUI}
            profileImage={profileImage}
            nickname={nickname}
            logOut={logOut}
            navigate={navigate}
        />
    )
}