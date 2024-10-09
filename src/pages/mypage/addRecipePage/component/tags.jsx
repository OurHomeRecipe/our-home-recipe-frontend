import React, {useEffect} from 'react'
import style from '../style/addrecipepage.module.css'

export default function RecipeTags({tags, setRecipeData}) {

    const getSelectOption = (e, tagTypeName) => {
        const tagId = e.target.value;
        const tagName = e.target.options[e.target.selectedIndex].textContent;
        setRecipeData(prev => ({
            ...prev,
            tags: [
                ...prev.tags,
                {tagId, tagName, tagTypeName}
            ]
        }));
    }

    return (
        <div className={style.foodInfo}>
            <div className={style.tagBox}>
                {tags.map((tagGroup, index) =>
                    <div key={index} className={style.selectBox}>
                        <p>{tagGroup.tagTypeName}</p>

                        <select name={`select${index}`} onChange={(e) => getSelectOption(e, tagGroup?.tagTypeName)}>
                            <option value=''>선택</option>

                            {tagGroup.tags.map(tag =>
                                <option key={tag.tagId} value={tag.tagId}>{tag.tagName}</option>
                            )}
                        </select>
                    </div>
                )}
            </div>
        </div>
    )
}
