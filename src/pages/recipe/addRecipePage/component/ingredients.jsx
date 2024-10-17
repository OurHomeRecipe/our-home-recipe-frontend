
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

    // 선택한 값이 변경될 때 마다 recipeData의 ingredients 값도 바뀜
    useEffect(() => {
        setRecipeData(prev => ({
            ...prev,
            ingredients: selects
        }))
        console.log(selects);
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
        let ingredientUnit = "";

       
        // selects 배열의 중복 확인을 위해 Set으로 변환
        const selectedIds = new Set(selects.map(select => select.ingredientId));

        if (selectedIds.has(ingredientId)) {
            setSelects(selects.filter((select) => select.index !== index)); //삭제
            alert('이미 존재하는 재료입니다.');
            return;
        }

        // ingredients 배열을 Map으로 변환해 탐색 최적화
        const ingredientMap = new Map(ingredients.map(ingredient => [String(ingredient.ingredientId), ingredient.ingredientUnit]));

        // Map에서 단위를 바로 찾아서 할당
        ingredientUnit = ingredientMap.get(ingredientId) || "";

        //선택한 재료 상태 배열에 추가
        setSelects(prevSelects => 
            prevSelects.map( select => 
                select.index === index ? { 
                    ...select, 
                    ingredientId:ingredientId,
                    ingredientName:ingredientName,
                    ingredientUnit:ingredientUnit
                } : 
                select
            )
        );
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
                <p>{select.ingredientUnit}</p>
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