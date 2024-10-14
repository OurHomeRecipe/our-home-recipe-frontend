import common from '../../css/pages/page.common.module.css'
import style from './style/mainPage.module.css'
import RecipeCard from './component/recipeCard'
import { useState } from 'react';
import { useRecipeListQuery } from '../../api/queries/recipeQueries';
import Pagenation from '../../common/component/pagenation/pagenation';



export default function MainPage() {

  const [page, setPage] = useState(0); //현재 페이지
  
  const {content, totalPages, pageable, status} = useRecipeListQuery(page); //서버에서 받아온 레시피 목록
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

  if(status === "pending") {return ( <div>...Loading</div>)}


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