
import { useEffect, useState } from "react";
import style from "../style/addRecipeIngredients.module.css"
import { BiSolidMinusCircle } from "react-icons/bi";

export default function RecipeIngredients({ingredients, setRecipeData}) {


    // 선택한 재료
    const [selects, setSelects] = useState([
        { 
            index: 0, 
            ingredientId: '',
            ingredientName:'',
            ingredientQuantity: 0 }
    ]);


    const [ingredientUnit, setIngredientUnit] = useState('');

    // 선택한 값이 변경될 때 마다 recipeData의 ingredients 값도 바뀜
    useEffect(() => {
        setRecipeData(prev => ({
            ...prev,
            ingredients: selects
        }))
    }, [selects]);


    // 선택박스 추가 생성
    const addSelect = () => {
        const lastIndex = selects[selects.length-1].index + 1
        setSelects([...selects, { index: lastIndex }]);
    };


    // 선택박스 삭제
    const deleteIngredient = (indexToDelete) => {
        if(selects.length === 1){
            alert("하나의 재료는 반드시 있어야 합니다.")
            return;
        }
        // 선택된 인덱스를 제외한 새로운 배열로 업데이트
        setSelects(selects.filter((select) => select.index !== indexToDelete));
    };



    // 선택박스에서 값을 선택할 때마다 수행되는 로직
    const upDateIngredient = (e, index) => {
        const ingredientId = e.target.value;
        const ingredientName = e.target.options[e.target.selectedIndex].textContent;

        setSelects(prevSelects => 
            prevSelects.map( select => 
                select.index === index ? { 
                    ...select, 
                    ingredientId:ingredientId,
                    ingredientName:ingredientName
                } : 
                select
            )
        );

        for (let i = 0; i < ingredients.length; i++) {
            if (ingredientId === String(ingredients[i].ingredientId)) {
                setIngredientUnit(ingredients[i].ingredientUnit);
                break;  // 원하는 값을 찾으면 루프를 중단
            }
        }
    }


    //그램 수 입력
    const updateQuantity = (e, index) => {
        setSelects(prevSelects => 
            prevSelects.map(select => 
                select.index === index ? { ...select, ingredientQuantity: e.target.value } : select
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

    {selects.map(select => (
        <div key={select.index} className={style.contentBox}>

            <div className={style.ingredient_box}>
                <p>재료: </p>

                <select onChange={(e) => upDateIngredient(e,select.index)}>
                    <option value=''>선택</option>
                    {ingredients.map(ingredient => (
                        <option key={ingredient.ingredientId} value={ingredient.ingredientId}>
                            {ingredient.ingredientName}
                        </option>
                    ))}
                </select>
            </div>

            <div className={style.quantityBox}>
                <input type='text' onChange={(e) => updateQuantity(e, select.index)}/>
                <p>{ingredientUnit}</p>
            </div>

            <BiSolidMinusCircle
                className={style.deleteBtn}
                onClick={() => deleteIngredient(select.index)} // 클릭 시 삭제할 인덱스 전달
            />
        </div>
    ))}
</div>
)

}