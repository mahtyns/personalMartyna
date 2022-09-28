import classNames from 'classnames'
import React from 'react'
// import PropTypes from 'prop-types'

const TextCentered = ({variant, content}) => {

  const textCenteredClasses = classNames('textCtrContainer', 
    {
        'xs': variant === "xs",
        's': variant === "s",
        'm': variant === "m",
        'l': variant === "l"
    }
  )  

  return (
    <div className={textCenteredClasses}>
        {content}
    </div>
  )
}

TextCentered.propTypes = {}

export default TextCentered