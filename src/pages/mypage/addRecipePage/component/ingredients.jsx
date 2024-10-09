
import { useEffect, useState } from "react";
import style from "../style/addRecipeIngredients.module.css"
import { BiSolidMinusCircle } from "react-icons/bi";

export default function RecipeIngredients({ingredients, setRecipeData}) {

    const [selects, setSelects] = useState([
        { 
            index: 1, 
            ingredientId: '',
            ingredientName:'',
            quantity: 0 }
    ]);

    console.log(selects)

    useEffect(() => {
        setRecipeData(prev => ({
            ...prev,
            ingredients: selects
        }))
    }, [selects]);


    // 선택박스 추가 생성

    const addSelect = () => {
        const newIndex = selects.length + 1;
        setSelects([...selects, { index: newIndex }]); // 재료추가
    };


    // 선택박스 삭제

    const deleteIngredient = (indexToDelete) => {
        if(selects.length === 1){
            alert("하나의 재료는 반드시 있어야 합니다.")
            return;
        }
        // 선택된 인덱스를 제외한 새로운 배열로 업데이트
        setSelects(selects.filter(({ index }) => index !== indexToDelete));
    };


    //재료입력
    const upDateIngredient = (e, index) => {
        const ingredientId = e.target.value;
        const ingredientName = e.target.options[e.target.selectedIndex].textContent;

        setSelects(prevSelects => 
            prevSelects.map((select, i) => 
                i+1 === index ? { 
                    ...select, 
                    ingredientId:ingredientId,
                    ingredientName:ingredientName
                } : 
                select
            )
        );
        
    }

    //그램 수 입력
    const updateQuantity = (e, index) => {
        setSelects(prevSelects => 
            prevSelects.map((select, i) => 
                i+1 === index ? { ...select, quantity: e.target.value } : select
            )
        );
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

                <select onChange={(e) => upDateIngredient(e,index)}>

                    <option value=''>선택</option>
                    {ingredients.map(ingredient => (
                        <option key={ingredient.ingredientId} value={ingredient.ingredientId}>
                            {ingredient.ingredientName}
                        </option>
                    ))}
                </select>
            </div>
            <div className={style.quantityBox}>

                <input type='text' onChange={(e) => updateQuantity(e, index)}/>

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

