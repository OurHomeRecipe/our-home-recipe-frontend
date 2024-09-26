import { useContext } from "react"
import style from "../../css/sidebar.module.css"
import { SidebarContext } from "../../context/sidebarContext"

export default function Sidebar(){

    const {show} = useContext(SidebarContext);

    return(
        <div className={`${style.frame} ${show ? style.slideOut : style.slideIn}`}>
                <h1>카테고리1</h1>
                <h1>카테고리2</h1>
                <h1>카테고리3</h1>
                <h1>카테고리4</h1>
        </div>
    )
}