import { useLocation } from 'react-router-dom';
import common from '../../../css/pages/page.common.module.css'
import style from './style/detailRecipe.module.css'
import { ProfileImg, RecipeImage } from './style/detailRecipe.style'
import { useRecipeDetailQuery } from '../../../api/queries/recipeQueries';
import Comment from './component/comment';

export default function DetailRecipePage() {

    const location = useLocation(); //url 정보
    const recipeId = location.pathname.split('/')[2]; //레시피 아이디

    // 레시피 조회
    const { data, error, isLoading } = useRecipeDetailQuery(recipeId); 
    const { member, recipeImage, recipeName, recipeDescription, tags, ingredients } = data || {};
    
    
    
    if (isLoading) { return <div>Loading...</div>; }
    if (error) { return <div>Error: {error.message}</div>; }

    return (
    <div className={common.frame}>

            <div className={style.imgBox}>
                <RecipeImage image={recipeImage}>         
                    <ProfileImg image={member.memberProfileImage}/>
                </RecipeImage>
                <p>{member.memberNickname}</p>
            </div>

            <div className={style.contentBox}>
                <h1>{recipeName}</h1>
                <pre>{recipeDescription}</pre>

                <hr/>

                {tags.map((tag, index) => 
                    <div key={index} className={style.tagBox}>
                        <p>{tag.tagTypeName} :</p>
                        <p>{tag.tags[0].tagName}</p>
                    </div>
                )}

                <hr/>

                <h2>재료</h2>
                {ingredients.map( ingredient => 
                    <div key={ingredient.ingredientId} className={style.ingredientBox}>
                        <p>{ingredient.ingredientName}</p>
                        <p>{ingredient.ingredientQuantity}</p>
                        <p>{ingredient.ingredientUnit}</p>
                    </div>
                )}
            </div>

            <Comment recipeId={recipeId}/>

    </div>
    )
}
