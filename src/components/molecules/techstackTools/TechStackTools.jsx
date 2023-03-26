import React from 'react'
import TextCentered from '../../atoms/text-elements/TextCentered'
import StackTool from '../stackTool/StackTool'
import './toolsStyles.css'
// import { stackToolsFE } from '../../../datafiles/stack'

const TechStackTools = (props) => {
  return (
    <div className='toolsContainer'>
        <TextCentered variant={'s'} content={ props.toolsCategory } />
        <div className="toolsWrapper">
          {props.toolsList.map(tool => <StackTool tool={tool} />)}
        </div>
    </div>
  )
}

export default TechStackTools