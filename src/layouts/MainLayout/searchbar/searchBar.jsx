import style from "../../../css/mainlayout.module.css"
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className={style.search_frame}>
    <div className={style.searchBox}>
      <select>
        <option>레시피</option>
        <option>사용자</option>
      </select>
      <p>|</p>
      <input type="text"  placeholder="검색어를 입력해주세요."/>
    </div>
      <IoSearch size={40} color="#ffbb00" />
  </div>
  )
}
