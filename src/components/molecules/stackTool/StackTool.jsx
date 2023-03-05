import React from 'react'
import StackIcon from '../../atoms/stack-icon/StackIcon'
import TextCentered from '../../atoms/text-elements/TextCentered'
import './stackToolStyles.css'

const StackTool = (props) => {
  return (
    <div className="stackToolContainer">
        <StackIcon toolName={props.tool.tool_Name} toolImgSrc={props.tool.tool_Img}/>
        <TextCentered variant={'stack'} content={props.tool.tool_Name} />
    </div>
  )
}

export default StackTool