import { useNavigate } from 'react-router-dom'
import { IoMdAddCircleOutline } from "react-icons/io";
import style from './styles/myBoard.module.css'
import { useSearchRecipeByUserQuery } from '../../../api/queries/recipeQueries';
import { useEffect, useState } from 'react';
import BasicTable from '../../../common/component/table/basicTable';

export default function MyBoardPage() {

  const columns = [
    { id: 'preview', text: "미리보기" },
    { id: 'recipeName', text: "레시피 이름" },
    { id: 'rating', text: "평점" },
    { id: 'viewCount', text: "조회수" }
  ]

  // 컬럼 너비
  const colWidth = [
    { width: "35%"},
    { width: "35%"},
    { width: "20%"},
    { width: "10%"}

]

  const { content } = useSearchRecipeByUserQuery(); //서버로부터 받아온 recipe 데이터
  const [items, setItems] = useState([]) //테이블안에 들어갈 데이터

  useEffect(() => {
    if (content.length !== 0) { // content가 있을 때만 실행
      content.map(item => setItems(prev => [
        ...prev,
        {
          preview: '',
          recipeName: item.recipeName,
          rating: item.rating,
          viewCount: item.viewCount
        }
      ]))
    }
  }, [content]); 

  const navigate = useNavigate();

  const handleAddRecipe = () => {
    navigate('/addrecipe')
  }



  return (
    <div className={style.frame}>

      <div className={style.buttonBox}>        
        <button 
          type='button' 
          className={style.addRecipeBtn}
          onClick={handleAddRecipe}
        >
          레시피 등록하기
          <IoMdAddCircleOutline color='white' />
        </button>
      </div>

      <BasicTable colWidth={colWidth} columns={columns} items={items} />

    </div>
  )
}
