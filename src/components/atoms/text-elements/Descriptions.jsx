import classNames from 'classnames'
import React from 'react'
import './textStyles.css'

const Descriptions = ({variant, content, textransform}) => {

  const descriptionVariants = classNames('descriptionContainer', {
    'xs': variant === "xs",
    's': variant === "s",
    'm': variant === "m",
    'l': variant === "l"
  },
  {
    'uppercase': textransform === 'uppercase',
    'none': textransform === 'none'
  })

  return (
    <div className={descriptionVariants}>
            {content}
    </div>
  )
}

export default Descriptions