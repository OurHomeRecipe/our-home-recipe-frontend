

import { useRecipeMetaDataQuery } from '../../../api/queries/recipeQueries';
import page from '../../../css/pages/page.common.module.css'
import style from './style/addrecipepage.module.css'
import RecipeIngredients from './component/ingredients';
import RecipeTags from './component/tags';
import RecipeInfo from './component/recipeInfo';
import { useState } from 'react';

export default function AddRecipePage() {

    const [recipeData, setRecipeData] = useState({
        recipeName: "",
        description: "",
        tags: [
        //   {
        //     tagId: 12,
        //     tagName: "1인분",
        //     tagTypeName: "인분"
        //   }
        ],
        ingredients: [
        //   {
        //     ingredientId: 5,
        //     ingredientName: "돼지고기",
        //     ingredientQuantity: "100"
        //   }
        ]
      });

    //재료, 태그정보 가져오기
    const {ingredients, tags} = useRecipeMetaDataQuery();

    const handleAddRecipe = () => {
        console.log(recipeData);
    }
  
    return (
      <div className={page.frame}>
          <h1>레시피 등록</h1>
            <RecipeInfo setRecipeData={setRecipeData}/>
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
