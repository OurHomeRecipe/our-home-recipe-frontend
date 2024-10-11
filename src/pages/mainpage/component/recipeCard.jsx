import { useState } from 'react';
import style from '../style/recipeCard.module.css'
import { FaCircleInfo } from "react-icons/fa6";
import { Rating } from '@mui/material';

export default function RecipeCard({item}) {

    const [isHovered, setIsHovered] = useState(false); //mouse가 hover됐는지 여부를 검사하는 상태변수

  return (
    <div className={style.frame}>
        <img src={item.recipeImage} alt={`${item.recipeName}이미지`} />
        {isHovered ? 
            <div className={style.infoDetailBox} onMouseLeave={() => setIsHovered(false)}>
                <div>
                    <p>{item.recipeDescription}</p>
                    <Rating name="read-only" value={item.rating} className={style.rating} readOnly />
                </div>
            </div>
            :
            <div className={style.infoBox}>
                <div className={style.info}>
                    <h1>{item.recipeName}</h1>
                    <p>@{item.createdBy}</p>
                </div>
                <div className={style.info}>
                    <FaCircleInfo 
                        size={30} 
                        color='#ffffff87'
                        onMouseEnter={() => setIsHovered(true)} // 마우스가 들어왔을 때                   
                    />
                    <p>{item.viewCount}회</p>
                </div>
            </div>
        }
    </div>
  )
}
