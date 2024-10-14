import common from '../../css/pages/page.common.module.css'
import style from './style/mainPage.module.css'
import RecipeCard from './component/recipeCard'
import { useEffect, useState } from 'react';
import { useRecipeListByNickName, useRecipeListQuery } from '../../api/queries/recipeQueries';
import Pagenation from '../../common/component/pagenation/pagenation';
import { useAppSelector } from '../../RootStore';



export default function MainPage() {

  const searchType = useAppSelector(state => state.search.searchType);
  const [page, setPage] = useState(0); //현재 페이지

  const recipeListByName = useRecipeListQuery(page); // 'name' 검색 시 사용하는 쿼리
  const recipeListByNickName = useRecipeListByNickName(page); // 'nickname' 검색 시 사용하는 쿼리

  const [content, setContent] = useState([]);
  const [totalPages, setTotalPages] = useState('');
  const [pageable, setPageable] = useState({})

  useEffect(() => {

    if(searchType === 'name' && recipeListByName.status === 'success'){
      setContent(recipeListByName.content || []);
      setTotalPages(recipeListByName.totalPages);
      setPageable(recipeListByName.pageable);
    }

    if(searchType === 'nickname' && recipeListByNickName.status === 'success'){
      setContent(recipeListByNickName.content || []);
      setTotalPages(recipeListByNickName.totalPages);
      setPageable(recipeListByNickName.pageable);
    }
  }, [ searchType, page, recipeListByName, recipeListByNickName]);

  const startIndex = (page) * pageable.pageSize; //0, 9, 18, 27... 
  const currentItems = content.slice(startIndex, startIndex + pageable.pageSize); // {0~8} {9~17} {18~26} ...

  // 3개씩 배열을 그룹화
  const getRows = (items) => {
    const rows = [];
    for (let i = 0; i < items.length; i += 3) {
      rows.push(items.slice(i, i + 3));
    }
    return rows;
  };

  return (
    <div className={common.frame}>
      {
        getRows(currentItems).map((row, rowIndex) => 
          <div key={rowIndex} className={style.rowFrame}>
            {
              row.map(item => <RecipeCard key={item.recipeId} item={item}/>)
            }
          </div>
        )
      }

      {content.length !== 0 ?       
        <div className={style.pagenationBox}>
          <Pagenation totalPages={totalPages} pageSize={pageable.pageSize} page={page} setPage={setPage}/>
        </div>
      : ''}

    </div>
  )
}