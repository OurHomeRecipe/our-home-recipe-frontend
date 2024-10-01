import React from 'react'
import page from '../../../css/pages/page.common.module.css'
import style from '../../../css/pages/addrecipepage.module.css'
import styled from 'styled-components'
import { LuImagePlus } from "react-icons/lu";

export default function AddRecipePageUI() {

    const FoodImg = styled.div`
        display: flex;
        width: 400px;
        height: 300px;
        border-radius: 10px;
        background-color: #f1f1f1;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `

  return (
    <div className={page.frame}>
        <div className={style.frame}>

            <FoodImg>
                <LuImagePlus size={30} color='#ffbb00' />
            </FoodImg>

            <div className={style.foodInfo}>
                <div className={style.inputBox}>
                    <p>음식 이름</p>
                    <input type='input'/>
                </div>

                <div className={style.inputBox}>
                    <p>재료</p>
                    <textarea/>
                </div>

                <div className={style.inputBox}>
                    <p>카테고리1</p>
                    <select>
                        <option value="" disabled>선택</option>
                        <option>한식</option>
                        <option>중식</option>
                        <option>일식</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}
