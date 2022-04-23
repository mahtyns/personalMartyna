import React from 'react';
import "./navigationLinkStyles.css";


const NavigationLink = ({navigationLink}) => {
  return (
    <div className='navLink'>{navigationLink}</div>
  )
}

export default NavigationLink