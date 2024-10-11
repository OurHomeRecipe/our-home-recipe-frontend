import { useLocation } from 'react-router-dom';
import common from '../../../css/pages/page.common.module.css'
import style from './style/detailRecipe.module.css'
import { ProfileImg, RecipeImage } from './style/detailRecipe.style'
import { useRecipeDetailQuery } from '../../../api/queries/recipeQueries';

export default function DetailRecipePage() {
    const location = useLocation(); //url 정보
    const recipeId = location.pathname.split('/')[2]; //레시피 아이디
    console.log('레시피id:', recipeId);

    const {member, recipeImage, recipeName, recipeDescription, tags, ingredients} = useRecipeDetailQuery(recipeId);
    console.log('회원', member);

  return (
    <div className={common.frame}>

        <div className={style.imgBox}>
            <RecipeImage image={recipeImage}>         
                <ProfileImg image={member.memberProfileImage}/>
            </RecipeImage>
            <p>{member.memberNickname}</p>
        </div>

        <div>
            <h1>{recipeName}</h1>
        </div>
    </div>
  )
}
