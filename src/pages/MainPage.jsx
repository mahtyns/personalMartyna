import React from 'react'
import LandingBackgroundTop from '../components/landing-elements/landing-background/LandingBackgroundTop';
import MainPageSection from '../components/layouts/mainPageSection/MainPageSection';
import ImageLeftText from '../components/molecules/image-text-combinations/ImageLeftText';
import mainPageDescriptions from '../datafiles/descriptions';
import { Link } from 'react-router-dom'


const MainPage = () => {
  return (
    <>
      <LandingBackgroundTop />
      <MainPageSection 
      sectionTitle={"Hello, traveller"} 
          buttonContent={<Link to='/about'>More</Link>} 
          buttonVariant={'dark'} 
          content={<ImageLeftText
            imageSource={'https://svgshare.com/i/rAb.svg'}
          imageAlt={'Placeholder'} 
          titleMain={'Nice to meet you'} 
          description={mainPageDescriptions[0]} 
          titleVariant={'l'} 
          descrVariant={'l'}/>}/>
      <MainPageSection sectionTitle={"Discover my projects"} buttonContent={<Link to="/projects">Dive in</Link>} buttonVariant={'dark'}/>
      <MainPageSection sectionTitle={"Looking for me?"} buttonContent={<Link to="/contact">Contact me</Link>} buttonVariant={'dark'}/>
    </>
  )
}

export default MainPage
