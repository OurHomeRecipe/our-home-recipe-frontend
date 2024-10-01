import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import style from '../../../css/pages/mypage.module.css'

export default function MyBoardPageUI({handleAddRecipe}) {
  return (
    <div>
      {/* 레시피 등록 버튼 */}
      <button 
        type='button' 
        className={style.addRecipeBtn}
        onClick={handleAddRecipe}
      >
        레시피 등록하기
        <IoMdAddCircleOutline color='white' />
      </button>

    </div>
  )
}
