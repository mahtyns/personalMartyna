import React from 'react'
import LandingBackground from '../components/landing-elements/landing-background/LandingBackground';
import MainPageSection from '../components/layouts/mainPageSection/MainPageSection';
import ImageLeftText from '../components/molecules/image-text-combinations/ImageLeftText';
import mainPageDescriptions from '../datafiles/descriptions';
import { Link } from 'react-router-dom'


const MainPage = () => {
  return (
    <>
      <LandingBackground />
      <MainPageSection 
      sectionTitle={"About me"} 
          buttonContent={<Link to='/about'>More</Link>} 
          buttonVariant={'dark'} 
      content={<ImageLeftText
          imageSource={'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80'}
          imageAlt={'Placeholder'} 
          titleMain={'Meet me'} 
          description={mainPageDescriptions[0]} 
          titleVariant={'l'} 
          descrVariant={'l'}/>}/>
      <MainPageSection sectionTitle={"Discover my projects"} buttonContent={<Link to="/projects">Dive in</Link>} buttonVariant={'dark'}/>
      <MainPageSection sectionTitle={"Looking for me?"} buttonContent={<Link to="/contact">Contact me</Link>} buttonVariant={'dark'}/>
    </>
  )
}

export default MainPage