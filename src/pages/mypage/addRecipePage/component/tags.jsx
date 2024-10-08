import React from 'react'
import style from '../style/addrecipepage.module.css'

export default function RecipeTags({tags}) {

  return (
    <div className={style.foodInfo}>
    <div className={style.tagBox}>

        {/* 식사시간 */}
        <div className={style.selectBox}>
            <p>{tags[0]?.tagTypeName}</p>
            <select >
                <option>선택</option>
                {tags[0]?.tags.map(tag => 
                    <option key={tag.tagId} value={tag.tagId}>{tag.tagName}</option>
                )}
            </select>                          
        </div>

        {/* 계절 */}
        <div className={style.selectBox}>
            <p>{tags[1]?.tagTypeName}</p>
            <select >
                <option>선택</option>
                {tags[1]?.tags.map(tag => 
                    <option key={tag.tagId} value={tag.tagId}>{tag.tagName}</option>
                )}
            </select>                          
        </div>
        
        {/* 인분 */}
        <div className={style.selectBox}>
            <p>{tags[2]?.tagTypeName}</p>
            <select >
                <option>선택</option>
                {tags[2]?.tags.map(tag => 
                    <option key={tag.tagId} value={tag.tagId}>{tag.tagName}</option>
                )}
            </select>                          
        </div>

        {/* 목적 */}
        <div className={style.selectBox}>
            <p>{tags[3]?.tagTypeName}</p>
            <select >
                <option>선택</option>
                {tags[3]?.tags.map(tag => 
                    <option key={tag.tagId} value={tag.tagId}>{tag.tagName}</option>
                )}
            </select>                          
        </div>


    </div>
</div>
  )
}
