import React from 'react'
import LandingBackground from '../components/landing-elements/landing-background/LandingBackground';
import MainPageSection from '../components/layouts/mainPageSection/MainPageSection';
import ImageLeftText from '../components/molecules/image-text-combinations/ImageLeftText';
import mainPageDescriptions from '../datafiles/descriptions';

const MainPage = () => {
  return (
    <>
      <LandingBackground />
      <MainPageSection 
      sectionTitle={"About me"} 
      buttonContent={"More"} 
      buttonVariant={'dark'} 
      content={<ImageLeftText 
          titleMain={'Meet me'} 
          description={mainPageDescriptions[0]} 
          titleVariant={'l'} 
          descrVariant={'l'}/>}/>
      <MainPageSection sectionTitle={"Discover my projects"} buttonContent={"Dive in"} buttonVariant={'dark'}/>
      <MainPageSection sectionTitle={"Looking for me?"} buttonContent={"Contact me"} buttonVariant={'dark'}/>
    </>
  )
}

export default MainPage