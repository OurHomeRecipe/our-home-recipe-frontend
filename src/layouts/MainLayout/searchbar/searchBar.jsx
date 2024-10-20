import style from "../../../css/mainlayout.module.css"
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import RootStore from "../../../RootStore";
import { toggleSearchName, toggleSearchNickname, toggleSearchType } from "../../../features/search/searchSlice";

export default function SearchBar() {


  const [searchType, setSearchType] = useState('name'); // 검색 타입
  const [searchContent, setSearchContent] = useState(''); //검색 내용

  // 검색 버튼 클릭 시
  const handleSearch = () => {
    // 검색타임 변경
    RootStore.dispatch(toggleSearchType(searchType));

    //검색 내용이 비어있을 때
    if(searchContent === ''){
      alert('검색내용을 입력해주세요');
    }

    // 검색타입이 레시피 이름일 때
    if(searchType === 'name'){
      RootStore.dispatch(toggleSearchName(searchContent));
    }
    // 검색타입이 닉네임 일 때
    if(searchType === 'nickname'){
      RootStore.dispatch(toggleSearchNickname(searchContent));
    }
    setSearchContent('');
  }

  return (
    <div className={style.search_frame}>
      <div className={style.searchBox}>

          <select onChange={(e) => setSearchType(e.target.value)}>
            <option value='name'>레시피</option>
            <option value='nickname'>사용자</option>
          </select>

          <p>|</p>

          <input 
            type="text"  
            placeholder="검색어를 입력해주세요."
            value={searchContent}
            onChange={(e) => setSearchContent(e.target.value)}
          />

      </div>
        <IoSearch size={40} color="#ffbb00" onClick={handleSearch} />
    </div>
  )
}
