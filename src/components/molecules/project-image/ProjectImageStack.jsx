import './projectImageStyles.css'
import React from 'react'
import StackBubble from '../../atoms/stack-bubble/StackBubble'
import ImageProject from '../../atoms/image-project/ImageProject'

const ProjectImage = (props) => {
  return (
        <div className="projectImageContainer">
            <div className="projectStack">{props.content.map(element => <StackBubble key={element} content={element}/>)}</div>
            {/* <ImageProject src={props.imageSource} alt={props.imageAlt} /> */}
            <img src={props.imageSource} alt={props.imageAlt} />
        </div>
    )
}

export default ProjectImage