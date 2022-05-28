import React from 'react'
import './footerStyles.css'

const Footer = ({content}) => {
  return (
    <>
      <div className='footerContainerMain'>
          <p>{content}</p>
      </div>
    </>
  )
}

export default Footer