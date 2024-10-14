import { useNavigate } from 'react-router-dom'
import { IoMdAddCircleOutline } from "react-icons/io";
import style from './styles/myBoard.module.css'
import { useMyRecipeQuery } from '../../../api/queries/recipeQueries';
import BasicTable from '../../../common/component/table/basicTable';

export default function MyBoardPage() {

  //칼럼
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

  const { content, error, isLoading } = useMyRecipeQuery(); //서버로부터 받아온 recipe 데이터

  const navigate = useNavigate();

  const handleAddRecipe = () => {
    navigate('/addrecipe')
  }


  if (isLoading) { return <div>Loading...</div>; }
  if (error) { return <div>Error: {error.message}</div>; }

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

      <BasicTable colWidth={colWidth} columns={columns} items={content} />
    </div>
  )
}
