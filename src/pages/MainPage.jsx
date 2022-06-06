import React from 'react'
import LandingBackground from '../components/landing-elements/landing-background/LandingBackground';
import MainPageSection from '../components/layouts/mainPageSection/MainPageSection';


const MainPage = () => {
  return (
    <>
      <LandingBackground />
      <MainPageSection sectionTitle={"About me"} buttonContent={"More"} buttonVariant={'dark'}/>
      <MainPageSection sectionTitle={"Discover my projects"} buttonContent={"Dive in"} buttonVariant={'dark'}/>
      <MainPageSection sectionTitle={"Looking for me?"} buttonContent={"Contact me"} buttonVariant={'dark'}/>
    </>
  )
}

export default MainPage