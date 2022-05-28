import classNames from 'classnames'
import React from 'react'
import './textStyles.css'

const Descriptions = ({variant, content}) => {

  const descriptionVariants = classNames('descriptionContainer', {
    'xs': variant === "xs",
    'x': variant === "x",
    'm': variant === "m",
    'l': variant === "l"
  })

  return (
    <div className={descriptionVariants}>
            {content}
    </div>
  )
}

export default Descriptions