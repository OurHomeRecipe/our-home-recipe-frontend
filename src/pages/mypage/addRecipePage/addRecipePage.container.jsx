import React, { useEffect, useRef, useState } from 'react'
import AddRecipePageUI from './addRecipePage.presenter'
import { useQuery } from '@tanstack/react-query';
import { recipeMetaDataAPI } from '../../../api/axios/recipe/get.recipe.metadata';

export default function AddRecipePage() {

  const [preview, setPreview] = useState(null); // 이미지 미리보기 상태
  const fileInputRef = useRef(null); // 파일 입력 필드 참조

  const [ingredients, setIngredients] = useState([]);
  const [tags, setTags] = useState([]);
  
  const {data, error} = useQuery({ queryKey: ['metaData'], queryFn: recipeMetaDataAPI });

  useEffect(() => {
    if (data) {
      console.log('Fetched data:', data);
      // 데이터가 성공적으로 가져와졌을 때 실행할 후속 작업
      setIngredients(data.ingredients);
      setTags(data.tags);
    }
    if(error){
      console.log(error);
    }
  }, [data]);


  const handleIconClick = () => {
    fileInputRef.current.click(); // input 필드 트리거
  };

  const handleImageChange = (e) => {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result); //이미지의 base64 데이터 URL을 설정
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
