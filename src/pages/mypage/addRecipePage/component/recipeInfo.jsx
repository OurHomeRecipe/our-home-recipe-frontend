import React from 'react'
import style from '../style/addrecipepage.module.css'
import { FoodImg } from '../style/addRecipe.Page.style'
import useImageUpload from '../../../../common/hook/useImageUpload';
import { LuImagePlus } from 'react-icons/lu';

export default function RecipeInfo() {

    //이미지 업로드
    const {preview, fileInputRef, handleIconClick, handleImageChange } = useImageUpload();

  return (
    <div className={style.foodInfo}>
    <div className={style.foodInfo_left}>
        <div className={style.inputBox}>
            <p>레시피 제목</p>
            <input type='text' placeholder='예) 진짜 엽떡맛 나는 떡볶이'/>
        </div>

        <div className={style.inputBox}>
            <p>요리 소개</p>
            <textarea type='text' placeholder='이 레시피의 탄생 배경을 적어주세요. 예) 엽떡을 자주 시켜먹어서 직접 만들어 본 레시피 입니다.'/>
        </div>        
    </div>

    <FoodImg preview={preview} onClick={handleIconClick}>
        {preview === null ? <LuImagePlus color='gray' size={25} /> : ''}               
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
    </FoodImg>
</div>
  )
}
