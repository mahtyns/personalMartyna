import React from 'react'
import TextCentered from '../../atoms/text-elements/TextCentered'
import StackTool from '../stackTool/StackTool'
import './toolsStyles.css'
import { designTools } from '../../../datafiles/stack'

const DesignTools = (props) => {
    return (
        <>
            <TextCentered variant={'s'} content={props.toolsCategory} />
            <div className="toolsWrapper">
                {designTools.map(tool => <StackTool tool={tool} />)}
            </div>
        </>
    )
}

export default DesignTools