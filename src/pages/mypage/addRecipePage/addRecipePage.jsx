import { useRef, useState } from 'react'
import { useRecipeMetaDataQuery } from '../../../api/queries/recipeQueries';
import page from '../../../css/pages/page.common.module.css'
import style from './style/addrecipepage.module.css'
import { LuImagePlus } from "react-icons/lu";
import { FoodImg } from './style/addRecipe.Page.style';
import AddRecipeIngredients from './component/addRecipeIngredients';

export default function AddRecipePage() {

  // State
  const [preview, setPreview] = useState(null); // 이미지 미리보기
  const fileInputRef = useRef(null); // 파일 입력 필드 참조

  //React-Query
  const {ingredients, tags} = useRecipeMetaDataQuery();

  //아이콘에 업로드 기능추가
  const handleIconClick = () => {
    fileInputRef.current.click(); // input 필드 트리거
  };

  //이미지 업로드
  const handleImageChange = (e) => {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();

        //이미지의 base64 데이터 URL을 설정
        reader.onloadend = () => {
          setPreview(reader.result); //미리보기 저장
        };
        reader.readAsDataURL(file); // 파일을 base64로 읽기 시작
        console.log(preview)
      }
    };

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
                  {preview === null ? <LuImagePlus color='gray' size={25} /> : ''}               
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
              </FoodImg>
          </div>
  
          <div className={style.foodInfo}>
              <div className={style.tagBox}>
                  {tags.map((tag,index) => 
                      <div key={index} className={style.selectBox}>
                          <p>{tag.tagTypeName}:</p>
                          <select>
                              <option value='' >선택</option>
                              {tag.tags.map((tag) =>
                                  <option key={tag.tagId} value={tag.tagId} >{tag.tagName}</option>
                              )}
                          </select>
                      </div> 
                  )}                          
              </div>
          </div>
  
          <hr/>
  
          <h2>재료정보</h2>
          <AddRecipeIngredients ingredients={ingredients}/>
  
          <div className={style.buttonBox}>
              <button type='button' className={style.saveButton}>레시피 등록</button>
          </div>
      </div>
    )
}
