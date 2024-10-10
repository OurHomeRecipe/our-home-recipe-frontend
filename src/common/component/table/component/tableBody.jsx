import { PreviewImg } from '../style/basicTable.style';
import { IoImagesOutline } from 'react-icons/io5';

export default function TableBody({rows}) {

  return (
    <tbody>
        {rows.map(item => 
            <tr>
                <td>
                    <PreviewImg preview={item.preview}>
                        {item.preview === '' ? <IoImagesOutline color='gray' size={25} /> : ''} 
                    </PreviewImg>
                </td>
                <td>{item.recipeName}</td>
                <td>{item.rating}</td>
                <td>{item.viewCount}회</td>
            </tr>
        )}
</tbody>
  )
}
