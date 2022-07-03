import React from 'react'
import './textStyles.css'
import classNames from 'classnames'


const ProjectName = ({content, variant}) => {

  const titleVariants = classNames('projectNameText', {
    'xs': variant === "xs",
    's': variant === "s",
    'm': variant === "m",
    'l': variant === "l"
  })


  return (
    <div className={titleVariants}>
        {content}
    </div>
  )
}

export default ProjectName