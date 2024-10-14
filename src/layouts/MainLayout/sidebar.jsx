import style from "../../css/sidebar.module.css"
import { useAppSelector } from "../../RootStore";

export default function Sidebar(){

    
    const show = useAppSelector((state) => state.sidebar.show); // sample 상태 조회

    return(
        <div className={`${style.frame} ${show ? style.slideOut : style.slideIn}`}>
            <div className={style.category_frame}>
                <h1>한식</h1>
                <h1>중식</h1>
                <h1>일식</h1>
                <h1>홈베이킹</h1>
            </div>
        </div>
    )
}