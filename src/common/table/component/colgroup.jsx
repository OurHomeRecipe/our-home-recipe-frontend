import React from 'react'

export default function ColGroup({colWidth}) {

    return (
    <colgroup>
        {colWidth.map( width => <col style={width} />)}
    </colgroup>
    )
}
