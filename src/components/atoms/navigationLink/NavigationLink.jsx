import React from 'react';
import "./navigationLinkStyles.css";


const NavigationLink = (props) => {
  return (
    <div className='navLink'>{props.navigationLink}</div>
  )
}

export default NavigationLink