import React from 'react'

const StackIcon = (props) => {
  return (
    <div className="stackIconWrapper"> 
        <img alt={props.tools.toolName} src={props.tools.toolImg}/>
    </div>
  )
}

export default StackIcon