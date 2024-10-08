

import { useRecipeMetaDataQuery } from '../../../api/queries/recipeQueries';
import page from '../../../css/pages/page.common.module.css'
import style from './style/addrecipepage.module.css'
import RecipeIngredients from './component/ingredients';
import RecipeTags from './component/tags';
import RecipeInfo from './component/recipeInfo';

export default function AddRecipePage() {

    //재료, 태그정보 가져오기
    const {ingredients, tags} = useRecipeMetaDataQuery();
  
    return (
      <div className={page.frame}>
          <h1>레시피 등록</h1>
            <RecipeInfo/>
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
