import React, { useEffect, useState } from 'react'
import style from "../../css/recipe/addRecipeIngredients.module.css"
import { BiSolidMinusCircle } from "react-icons/bi";

export default function AddRecipeIngredients({ingredients}) {

    const [selects, setSelects] = useState([{ index: 1 }]);


    const addSelect = () => {
        const newIndex = selects.length + 1;
        setSelects([...selects, { index: newIndex }]); // 재료추가
    };

    const deleteIngredient = (indexToDelete) => {
        if(selects.length === 1){
            alert("하나의 재료는 반드시 있어야 합니다.")
            return;
        }
        // 선택된 인덱스를 제외한 새로운 배열로 업데이트
        setSelects(selects.filter(({ index }) => index !== indexToDelete));
    };


  return (
    <div className={style.frame}>
    <div>
        <button type='button' className={style.addButton} onClick={addSelect}>
            재료 추가하기
        </button>
    </div>

    {selects.map(({ index }) => (
        <div key={index} className={style.contentBox}>
            <div className={style.ingredient_box}>
                <p>재료: </p>
                <select>
                    <option value=''>선택</option>
                    {ingredients.map(ingredient => (
                        <option key={ingredient.ingredientId} value={ingredient.ingredientId}>
                            {ingredient.ingredientName}
                        </option>
                    ))}
                </select>
            </div>
            <div className={style.quantityBox}>
                <input type='text' />
                <p>g</p>
            </div>
            <BiSolidMinusCircle
                className={style.deleteBtn}
                onClick={() => deleteIngredient(index)} // 클릭 시 삭제할 인덱스 전달
            />
        </div>
    ))}
</div>
  )
}
