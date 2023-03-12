import classNames from 'classnames'
import React from 'react'

const TextCentered = (props) => {

  const textCenteredClasses = classNames('textCtrContainer', 
    {
        'xs': props.variant === "xs",
        's': props.variant === "s",
        'm': props.variant === "m",
        'l': props.variant === "l",
        'stack': props.variant === 'stack'
    }
  )  

  return (
    <div className={textCenteredClasses}>
        {props.content}
    </div>
  )
}

export default TextCentered