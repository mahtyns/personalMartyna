import classNames from "classnames"
import React from 'react'
import './buttonStyles.css'

const Button = ({variant, content}) => {

  const classesButton = classNames('buttonGeneral', {
    'light': variant === 'light'
  })

  return (
    <>
    <button className={classesButton}>{content}</button>
    </>
  ) 
}

export default Button