import { useState } from 'react';
import style from '../style/recipeCard.module.css'
import { FaCircleInfo } from "react-icons/fa6";

export default function RecipeCard({item}) {

    const [isHovered, setIsHovered] = useState(false); //mouse가 hover됐는지 여부를 검사하는 상태변수

  return (
    <div className={style.frame}>
        <img src={item.imgFile} alt={`${item.recipeName}이미지`} />
        {isHovered ? 
            <div className={style.infoDetailBox} onMouseLeave={() => setIsHovered(false)}>
                <p>{item.recipeDesc}</p>
            </div>
            :
            <div className={style.infoBox}>
                <div className={style.info}>
                    <h1>{item.recipeName}</h1>
                    <p>@{item.NickName}</p>
                </div>
                <FaCircleInfo 
                    size={30} 
                    color='#ffffff87'
                    onMouseEnter={() => setIsHovered(true)} // 마우스가 들어왔을 때
                    
                />
            </div>
        }
    </div>
  )
}
