import CommentInput from './commentInput'
import style from '../style/comment.module.css'
import { useRecipeCommentQuery } from '../../../../api/queries/recipeQueries'

export default function Comment({recipeId}) {

  const {data, error, isLoading} = useRecipeCommentQuery(recipeId);

  const {content} = data || [];

  console.log(content);

  if (isLoading) { return <div>Loading...</div>; }
  if (error) { return <div>Error: {error.message}</div>; }

  return (
    <div className={style.frame}>

        <CommentInput recipeId={recipeId}/>

        {content.map( comment => 
          <div key={comment.commentId} className={style.commentBox}>
            <p className={style.writer}>{comment.createdBy}</p>
            <pre>{comment.comment}</pre>
            <p className={style.date}>{comment.updatedAt}</p>
          </div>
        )}

    </div>
  )
}
