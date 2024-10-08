
import { useRecipeMetaDataQuery } from '../../../api/queries/recipeQueries';
import page from '../../../css/pages/page.common.module.css'
import style from './style/addrecipepage.module.css'
import { LuImagePlus } from "react-icons/lu";
import { FoodImg } from './style/addRecipe.Page.style';
import useImageUpload from '../../../common/hook/useImageUpload';
import RecipeIngredients from './component/ingredients';
import RecipeTags from './component/tags';

export default function AddRecipePage() {

    //이미지 업로드
    const {preview, fileInputRef, handleIconClick, handleImageChange } = useImageUpload();

    //재료, 태그정보 가져오기
    const {ingredients, tags} = useRecipeMetaDataQuery();

    

    return (
      <div className={page.frame}>
          <h1>레시피 등록</h1>
  
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

          <RecipeTags tags={tags}/>
  
          <hr/>
  
          <h2>재료정보</h2>
          <RecipeIngredients ingredients={ingredients}/>
  
          <div className={style.buttonBox}>
              <button type='button' className={style.saveButton}>레시피 등록</button>
          </div>
      </div>
    )
}
