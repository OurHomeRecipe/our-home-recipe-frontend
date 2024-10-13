import CommentInput from './commentInput'
import style from '../style/comment.module.css'
import { useRecipeCommentQuery } from '../../../../api/queries/recipeQueries'
import Pagenation from '../../../../common/component/pagenation/pagenation';
import { useState } from 'react';

export default function Comment({recipeId}) {
  const [page, setPage] = useState(1);
  const {data, error, isLoading} = useRecipeCommentQuery({recipeId, page});  
  const {content, pageable} = data || [];
  const { totalPages } = data || '';
  console.log(pageable)
  console.log('댓글',content);

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

        <div className={style.pagenationBox}>
          <Pagenation totalPages={totalPages} pageSize={pageable.pageSize}/>
        </div>
    </div>
  )
}
