import { useState } from 'react';
import style from '../style/recipeCard.module.css'
import { FaCircleInfo } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { HiOutlineEye } from "react-icons/hi";
import { Rating } from '@mui/material';

export default function RecipeCard({item}) {

    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false); //mouse가 hover됐는지 여부를 검사하는 상태변수

  return (
    <div className={style.frame} onClick={() => navigate(`/detailRecipe/${item.recipeId}`)}>
        <img src={item.recipeImage} alt={`${item.recipeName}이미지`} />
        {isHovered ? 
            <div className={style.infoDetailBox} onMouseLeave={() => setIsHovered(false)}>              
                <pre>{item.recipeDescription}</pre>
                <Rating name="read-only" value={item.rating} readOnly />
            </div>
            :
            <div className={style.infoBox}>
                <div className={style.infoLeft}>
                    <h1>{item.recipeName}</h1>
                    <p>@{item.createdBy}</p>
                </div>

                <div className={style.infoRight}>
                        <FaCircleInfo 
                            size={30} 
                            color='#ffffff87'
                            onMouseEnter={() => setIsHovered(true)} // 마우스가 들어왔을 때
                            
                        />
                        <div className={style.viewCountBox}>
                            <HiOutlineEye size={20} />
                            <p>{item.viewCount}</p>
                        </div>
                </div>

            </div>
        }
    </div>
  )
}
