import style from "../../css/sidebar.module.css"
import { useAppSelector } from "../../RootStore";

export default function Sidebar(){

    
    const show = useAppSelector((state) => state.sidebar.show); // sample 상태 조회

    return(
        <div className={`${style.frame} ${show ? style.slideOut : style.slideIn}`}>
            <div className={style.category_frame}>
                <h1>카테고리1</h1>
                <h1>카테고리2</h1>
                <h1>카테고리3</h1>
                <h1>카테고리4</h1>
            </div>
        </div>
    )
}