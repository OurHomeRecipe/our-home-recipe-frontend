import CommentInput from './commentInput'
import style from '../style/comment.module.css'

export default function Comment() {
  return (
    <div className={style.frame}>
        <CommentInput/>
    </div>
  )
}
