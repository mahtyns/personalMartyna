import React from 'react'
import './stackIconStyles.css'

const StackIcon = (props) => {
  return (
    <div className="stackIconWrapper"> 
        <img alt={props.toolName} src={props.toolImgSrc}/>
    </div>
  )
}

export default StackIcon