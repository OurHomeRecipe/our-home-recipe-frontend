import page from '../../../css/pages/page.common.module.css'
import style from '../../../css/pages/addrecipepage.module.css'
import { LuImagePlus } from "react-icons/lu";
import { FoodImg } from './addRecipe.Page.style';



export default function AddRecipePageUI({
    preview,
    fileInputRef,
    handleIconClick,
    handleImageChange
}) {

  return (
    <div className={page.frame}>
        <h1>레시피 등록</h1>

        <div className={style.foodInfo}>
            <div className={style.foodInfo_left}>
                <div className={style.inputBox}>
                    <p>레시피 제목</p>
                    <input type='text' placeholder='예) 진짜 엽떡맛 나는 떡볶이'/>
                </div>

                <div className={style.inputBox}>
                    <p>요리 소개</p>
                    <textarea type='text' placeholder='이 레시피의 탄생 배경을 적어주세요. 예) 엽떡을 자주 시켜먹어서 직접 만들어 본 레시피 입니다.'/>
                </div>        
            </div>

            <FoodImg preview={preview} onClick={handleIconClick}>
                <LuImagePlus color='gray' size={25} />
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
            </FoodImg>
        </div>

        <div className={style.foodInfo}>
            <div className={style.inputBox}>
                <div className={style.selectBox}>
                    <p>태그</p>
                    <select>
                    </select>

                    <select>              
                    </select>

                    <select>                   
                    </select>
                </div>
            </div>
        </div>

        <div className={style.foodInfo}>
            <div className={style.inputBox}>
                <div className={style.selectBox}>
                    <p>시간</p>
                    <select>
                    </select>

                    <p>난이도</p>
                    <select>
                    </select>
                </div>               
            </div>
        </div>

        <hr/>

        <h3>재료정보</h3>



    </div>
  )
}
