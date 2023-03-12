import React from 'react';
import './landingTitleStyles.css';

const LandingTitle = () => {
  return (
      <div className='landingTitleContainer'>
          <p className='landingTitle'>
            <span aria-hidden="true">Welcome to my Lab</span>
            Welcome to my Lab
            <span aria-hidden="true">Welcome to my Lab</span>
          </p>
      </div>
  )
}

export default LandingTitle;