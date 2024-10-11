import common from '../../css/pages/page.common.module.css'
import style from './style/mainPage.module.css'
import RecipeCard from './component/recipeCard'
import { useState } from 'react';
import { useRecipeListQuery } from '../../api/queries/recipeQueries';



export default function MainPage() {

  const {content} = useRecipeListQuery(); //서버에서 받아온 레시피 목록
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지

  const itemsPerPage = 9; //한 페이지에 보여줄 아이템 개수
  const startIndex = (currentPage - 1) * itemsPerPage; //0, 9, 18, 27... 
  const currentItems = content.slice(startIndex, startIndex + itemsPerPage); // {0~8} {9~17} {18~26} ...

  // 3개씩 배열을 그룹화
  const getRows = (items) => {
    const rows = [];
    for (let i = 0; i < items.length; i += 3) {
      rows.push(items.slice(i, i + 3));
    }
    console.log('새로운 배열', rows);
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

      <div className={style.pagination}>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>이전</button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>다음</button>
      </div>

    </div>
  )

}