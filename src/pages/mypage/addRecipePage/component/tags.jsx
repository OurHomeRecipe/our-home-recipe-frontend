import React from 'react'
import style from '../style/addrecipepage.module.css'

export default function RecipeTags({tags}) {
  return (
    <div className={style.foodInfo}>
    <div className={style.tagBox}>
        {tags.map((tag,index) => 
            <div key={index} className={style.selectBox}>
                <p>{tag.tagTypeName}:</p>
                <select>
                    <option value='' >선택</option>
                    {tag.tags.map((tag) =>
                        <option key={tag.tagId} value={tag.tagId} >{tag.tagName}</option>
                    )}
                </select>
            </div> 
        )}                          
    </div>
</div>
  )
}
