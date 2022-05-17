import React from 'react'
import Button from '../components/atoms/button/Button'
import LandingBackground from '../components/landing-elements/landing-background/LandingBackground'

const MainPage = () => {
  return (
    <>
      <LandingBackground />
      <Button variant={'light'} content={'text'}/>
    </>
  )
}

export default MainPage