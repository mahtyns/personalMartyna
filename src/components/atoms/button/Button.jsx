import classNames from "classnames"
import React from 'react'
import './buttonStyles.css'

const Button = (props) => {

  const classesButton = classNames('buttonGeneral', {
    'light': props.variant === 'light',
    'dark': props.variant === 'dark',
  })

  return (
    <>
    <button className={classesButton}>{props.content}</button>
    </>
  ) 
}

export default Button