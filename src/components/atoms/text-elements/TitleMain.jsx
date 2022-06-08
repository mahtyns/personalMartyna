import React from 'react'
import classNames from 'classnames'


const TitleMain = ({variant, content}) => {

  const titleClasses = classNames('titleContainer', {
    'xs': variant === "xs",
    's': variant === "s",
    'm': variant === "m",
    'l': variant === "l"
  })

  return (
    <div className={titleClasses}>
            {content}
    </div>
  )
}

export default TitleMain