import React from 'react'
import FooterIcons from '../../molecules/footer-icons/FooterIcons'
import './footerStyles.css'

const Footer = ({content}) => {
  return (
    <>
      <div className='footerContainerMain'>
          <p>{content}</p>
          <FooterIcons />
      </div>
    </>
  )
}

export default Footer