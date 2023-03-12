import classNames from 'classnames'
import React from 'react'
import './textStyles.css'

const Descriptions = (props) => {

  const descriptionVariants = classNames('descriptionContainer', {
    'xs': props.variant === "xs",
    's': props.variant === "s",
    'm': props.variant === "m",
    'l': props.variant === "l"
  },
  {
    'uppercase': props.textransform === 'uppercase',
    'none': props.textransform === 'none'
  })

  return (
    <div className={descriptionVariants}>
            {props.content}
    </div>
  )
}

export default Descriptions