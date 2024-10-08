

import { useRecipeMetaDataQuery } from '../../../api/queries/recipeQueries';
import page from '../../../css/pages/page.common.module.css'
import style from './style/addrecipepage.module.css'
import RecipeIngredients from './component/ingredients';
import RecipeTags from './component/tags';
import RecipeInfo from './component/recipeInfo';
import { useState } from 'react';
import useImageUpload from '../../../common/hook/useImageUpload';

export default function AddRecipePage() {

    const {imgFile, preview, fileInputRef, handleIconClick, handleImageChange } = useImageUpload();
    const [recipeData, setRecipeData] = useState({
        recipeName: "",
        description: "",
        tags: [],
        ingredients: []
      });

    //재료, 태그정보 가져오기
    const {ingredients, tags} = useRecipeMetaDataQuery();

    //레시피 등록
    const handleAddRecipe = () => {
        console.log(recipeData);
        console.log(imgFile);

        //FormData로 만들어서 api로 보내야됨
        const formData = new FormData();
  
        formData.append('recipe',
            new Blob([JSON.stringify(recipeData)], {type:"application/json"})
        );
  
        if (imgFile) {
            formData.append('profileImage', imgFile); // 이미지 파일 객체 추가
        }
    }
  
    return (
      <div className={page.frame}>
          <h1>레시피 등록</h1>
            <RecipeInfo
                preview={preview}
                fileInputRef={fileInputRef}
                handleIconClick={handleIconClick}
                handleImageChange={handleImageChange}
                setRecipeData={setRecipeData}
            />
            <RecipeTags tags={tags} setRecipeData={setRecipeData}/>


          <hr/>
  
          <h2>재료정보</h2>
          <RecipeIngredients ingredients={ingredients} setRecipeData={setRecipeData}/>

  
          <div className={style.buttonBox}>
              <button type='button' className={style.saveButton} onClick={handleAddRecipe}>레시피 등록</button>
          </div>
      </div>
    )
}
