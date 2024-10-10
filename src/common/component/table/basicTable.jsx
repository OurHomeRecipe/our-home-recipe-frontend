import React from 'react'
import style from './style/basicTable.module.css'
import ColGroup from './component/colgroup';
import TableHead from './component/tableHead';
import TableBody from './component/tableBody';


export default function BasicTable({colWidth, columns, items, }) {

  return (
    <table className={style.basic}>
        <ColGroup colWidth={colWidth}/>

        <TableHead>
            {columns.map( col => 
                <th key={col.id}>{col.text}</th>
            )
            }
        </TableHead>

        <TableBody rows={items}/>
    </table>
  )
}
