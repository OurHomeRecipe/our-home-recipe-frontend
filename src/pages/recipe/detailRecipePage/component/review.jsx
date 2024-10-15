import ReviewInput from './reviewInput'
import style from '../style/comment.module.css'
import {useRecipeReviewQuery} from '../../../../api/queries/recipeQueries'
import Pagenation from '../../../../common/component/pagenation/pagenation';
import {useState} from 'react';

const stars = [1, 2, 3, 4, 5];

export default function Review({recipeId}) {
    const [page, setPage] = useState(0);
    const {data, error, isLoading} = useRecipeReviewQuery({recipeId, page});
    const {content, pageable} = data || [];
    const {totalPages} = data || '';

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className={style.frame}>
            <ReviewInput recipeId={recipeId}/>

            {content.map(review =>
                <div key={review.reviewId} className={style.reviewBox}>
                    {stars.map((star) => (
                        <span key={star} className={style.starWrapper} style={{cursor: "default"}}>
                            {/* 빈 별 */}
                            <span className={style.starBase}>★</span>

                            {/* 채워진 별 */}
                            <span
                                className={style.starFilled}
                                style={{
                                    width: `${
                                        review.rating >= star ? 100 :
                                            review.rating >= star - 0.5 ? 50 : 0
                                    }%`
                                }}
                            >★
                            </span>
                        </span>
                    ))}

                    <p className={style.writer}>{review.createdBy}</p>
                    <pre>{review.content}</pre>
                    <p className={style.date}>{review.updatedAt}</p>
                </div>
            )}

            {content.length !== 0 ?
                <div className={style.pagenationBox}>
                    <Pagenation totalPages={totalPages} pageSize={pageable.pageSize} page={page} setPage={setPage}/>
                </div>
                : ''}
        </div>
    )
}
