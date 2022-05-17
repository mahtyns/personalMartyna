import React from 'react'

const Button = ({variant, content}) => {

  return (
    <>
    <button className={variant}>{content}</button>
    </>
  ) 
}

export default Button