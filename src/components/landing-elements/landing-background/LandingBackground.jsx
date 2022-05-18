import React from 'react'
import LandingTitle from '../landing-title/LandingTitle'
import './landingBackgroundStyles.css';
import Button from '../../atoms/button/Button';

const LandingBackground = () => {
  return (
    <>
    <div className='landingContainer'>
    <LandingTitle />
    </div>
    <div className='callToAction'>
      <Button variant={'dark'} content={'EXPLORE'}/>
    </div>
    </>
  )
}

export default LandingBackground