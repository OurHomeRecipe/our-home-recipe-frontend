import style from '../style/comment.module.css'

export default function CommentInput() {



    return (
        <div className={style.commentInputBox}>

            <div className={style.writerInfo}>
                <p>작성자</p>
                <input type='text'/>
            </div>
            <textarea/>

            <div className={style.buttonBox}>
                <button type='button' >등록</button>
            </div>

        </div>
    )
}
