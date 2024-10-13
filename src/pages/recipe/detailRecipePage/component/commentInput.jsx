import { useState } from 'react';
import { useRecipeCommentMutation } from '../../../../api/queries/recipeQueries'
import style from '../style/comment.module.css'
import { useAppSelector } from '../../../../RootStore';

export default function CommentInput({recipeId}) {

    //댓글 등록 쿼리
    const {addComment} = useRecipeCommentMutation();

    //댓글을 담을 상태변수
    const [comment, setComment] = useState();

    //로그인 상태를 담은 전역변수
    const isLogin = useAppSelector(state => state.login.loginState)

    const handelCommentAdd = () => {
        
        console.log(isLogin)
        if(isLogin){
            addComment({recipeId, comment});
            setComment(''); //댓글 입력창 초기화
        }
        else{
            alert('로그인 후 댓글 입력이 가능합니다.');
            setComment(''); //댓글 입력창 초기화
        }
    }

    return (
        <div className={style.commentInputBox}>
            <textarea
                placeholder='타인을 비방하는 댓글은 삭제될 수 있습니다.'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
             />

            <div className={style.buttonBox}>
                <button type='button' onClick={handelCommentAdd}>등록</button>
            </div>

        </div>
    )
}
