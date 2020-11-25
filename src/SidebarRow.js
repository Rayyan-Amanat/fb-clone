import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarRow.css"



function SidebarRow({src,Icon,title}) {
    return (
        <div className="sidebarRow">
     {src && <Avatar src={src}/>}

     {Icon && <Icon/>}

<div  style={{marginLeft:"10px"}}>
            <p>{title}</p>

</div>
        </div>
    )
}

export default SidebarRow
