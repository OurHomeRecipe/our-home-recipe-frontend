import { useRecipeMetaDataQuery, useRecipeRegisterQuery } from '../../../api/queries/recipeQueries';
import page from '../../../css/pages/page.common.module.css'
import style from './style/addrecipepage.module.css'
import RecipeIngredients from './component/ingredients';
import RecipeTags from './component/tags';
import RecipeInfo from './component/recipeInfo';
import { useState } from 'react';
import useImageUpload from '../../../common/hook/useImageUpload';

export default function AddRecipePage() {

    //재료, 태그정보 가져오기
    const { data, error, isLoading } = useRecipeMetaDataQuery()
    const { ingredients, tags } = data || [];

    // 레시피 등록 쿼리
    const {recipeRegist} = useRecipeRegisterQuery();

    //이미지 등록
    const {imgFile, preview, fileInputRef, handleIconClick, handleImageChange } = useImageUpload();
    
    //레시피 등록 데이터
    const [recipeData, setRecipeData] = useState({
        recipeName: "",
        description: "",
        tags: [],
        ingredients: []
    });

    //formData 만들기
    const createFormData = (recipeData, imgFile) => {

        const formData = new FormData();

        formData.append('recipe',
            new Blob([JSON.stringify(recipeData)], {type:"application/json"})
        );
    
        formData.append('recipeImage', imgFile); // 이미지 파일 객체 추가
        
        return formData
    }

    //레시피 등록
    const handleAddRecipe = () => {      
        const formData = createFormData(recipeData, imgFile)       
        recipeRegist(formData); //레시피 등록 쿼리
    }

  
    if (isLoading) { return <div>Loading...</div>; }
    if (error) { return <div>Error: {error.message}</div>; }

    return (
      <div className={page.frame}>
          <h1>레시피 등록</h1>
            <RecipeInfo
                preview={preview}
                recipeData={recipeData}
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
