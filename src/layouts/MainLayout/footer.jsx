import React, { useState } from 'react'
import style from '../../css/footer.module.css'
import Modal from '../../common/modal/modal';

export default function Footer() {

  const [imgShow, setImgShow] = useState(false);

  const closePayBox = () => {
    setImgShow(false);
  }
    


  return (
    <div className={style.frame}>
      <div className={style.clickBox}>
        <p>여기를 눌러보세요!</p>
        <p className={style.fingerIcon}>👉🏻</p>
        <p className={style.clickButton} onClick={()=> setImgShow(true)}>click!</p>
      </div>

      {imgShow ? 
      <Modal>
        <div className={style.payBox}>
          <p>만드느라 고생한 개발자에게</p>
          <div className={style.payforImage}></div>
          <button type='button' className={style.payCloseBtn} onClick={closePayBox}>닫기</button>
        </div>
      </Modal> 
      : ''}

    </div>

  )
}
