import {useState} from 'react';
import {useRecipeReviewMutation} from '../../../../api/queries/recipeQueries'
import style from '../style/comment.module.css'
import {useAppSelector} from '../../../../RootStore';

const stars = [1, 2, 3, 4, 5];

export default function ReviewInput({recipeId}) {

    // 리뷰 등록 쿼리
    const {addReview} = useRecipeReviewMutation();

    // 리뷰을 담을 상태변수
    const [review, setReview] = useState('');

    // 로그인 상태를 담은 전역변수
    const isLogin = useAppSelector(state => state.login.loginState)

    const [rating, setRating] = useState(0); // 선택된 평점
    const [hover, setHover] = useState(0);   // hover 상태에서 보여줄 임시 평점

    const handelCommentAdd = () => {

        console.log(isLogin)
        if (isLogin) {
            addReview({recipeId, content: review, rating});
            setReview(''); //리뷰 입력창 초기화
        } else {
            alert('로그인 후 리뷰 입력이 가능합니다.');
            setReview(''); //리뷰 입력창 초기화
        }
    }

    // hover 상태에 따라 반별 효과 구현
    const handleMouseEnter = (starValue) => setHover(starValue);
    const handleMouseLeave = () => setHover(0);

    // 별 클릭 시 평점 설정
    const handleRatingClick = (starValue) => setRating(starValue);

    return (
        <div className={style.reviewInputBox}>
            <div className={style.starRating}>
                {stars.map((star, index) => (
                    <div key={index} className={style.starWrapper}>
                        {/* 빈칸 별 */}
                        <span className={style.starBase}>★</span>

                        {/* 채워진 별 */}
                        <span
                            className={style.starFilled}
                            style={{
                                width: `${hover >= star ? 100 : 
                                    hover >= (star - 0.5) ? 50 : 
                                        rating >= star ? 100 : 
                                            rating >= (star - 0.5) ? 50 : 0}%`
                            }}
                        >★</span>

                        {/* 왼쪽 절반 (0.5) */}
                        <div
                            className={style.leftHalf}
                            onMouseEnter={() => handleMouseEnter(star - 0.5)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleRatingClick(star - 0.5)}
                        ></div>

                        {/* 오른쪽 절반 (1.0) */}
                        <div
                            className={style.rightHalf}
                            onMouseEnter={() => handleMouseEnter(star)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleRatingClick(star)}
                        ></div>
                    </div>
                ))}
            </div>

            <textarea
                placeholder='타인을 비방하는 리뷰는 삭제될 수 있습니다.'
                value={review}
                onChange={(e) => setReview(e.target.value)}
            />

            <div className={style.buttonBox}>
                <button type='button' onClick={handelCommentAdd}>등록</button>
            </div>

        </div>
    )
}
