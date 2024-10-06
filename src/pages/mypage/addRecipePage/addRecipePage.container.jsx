import { useRef, useState } from 'react'
import AddRecipePageUI from './addRecipePage.presenter'
import { useRecipeMetaDataQuery } from '../../../api/queries/recipeQueries';

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
    <AddRecipePageUI
      preview={preview}
      fileInputRef={fileInputRef}
      ingredients={ingredients}
      tags={tags}
      handleIconClick={handleIconClick}
      handleImageChange={handleImageChange}
    />
  )
}
