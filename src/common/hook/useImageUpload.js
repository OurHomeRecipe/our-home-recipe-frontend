import { useRef, useState } from 'react'

export default function useImageUpload() {

    // State
    const [imgFile, setImgFile] = useState(null);
    const [preview, setPreview] = useState(null); // 이미지 미리보기
    const fileInputRef = useRef(null); // 파일 입력 필드 참조
  
  
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
          setImgFile(file);
        }
      };

  return {
    preview,
    imgFile,
    fileInputRef,
    handleIconClick, handleImageChange
  }
}
