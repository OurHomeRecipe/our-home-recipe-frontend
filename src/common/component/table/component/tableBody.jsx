import { useNavigate } from 'react-router-dom';
import { PreviewImg } from '../style/basicTable.style';
import { IoImagesOutline } from 'react-icons/io5';
import { Rating } from '@mui/material';

export default function TableBody({rows}) {

    console.log(rows)
    const navigate = useNavigate();

  return (
    <tbody>
        {rows.map(item => 
            <tr onClick={() => navigate(`/detailRecipe/${item.recipeId}`)}>
                <td>
                    <PreviewImg preview={item.recipeImage}>
                        {item.preview === '' ? <IoImagesOutline color='gray' size={25} /> : ''} 
                    </PreviewImg>
                </td>
                <td>{item.recipeName}</td>
                <td><Rating name="read-only" value={item.rating} readOnly /></td>
                <td>{item.viewCount}회</td>
            </tr>
        )}
</tbody>
  )
}
