import React from 'react'
import style from "../../../css/mainlayout.module.css"
import { IoSearch } from "react-icons/io5";

export default function SearchComponentUI() {
  return (
    <div className={style.search_frame}>
        <input type="text" className={style.searchBox} placeholder="검색어를 입력해주세요."/>
        <IoSearch size={40} color="#ffbb00" />
    </div>
  )
}
