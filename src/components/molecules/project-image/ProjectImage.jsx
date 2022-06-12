import './projectImageStyles.css'
import React from 'react'
import StackBubble from '../../atoms/stack-bubble/StackBubble'

const ProjectImage = ({imageSource, imageAlt, content}) => {
  return (
        <div className="projectImageContainer">
            <div className="projectStack">{content.map(element => <StackBubble content={element}/>)}</div> 
            <img src={imageSource} alt={imageAlt} />
        </div>
    )
}

export default ProjectImage