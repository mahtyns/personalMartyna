import React from 'react'
import LandingBackgroundTop from '../components/landing-elements/landing-background/LandingBackgroundTop';
import MainPageSection from '../components/layouts/mainPageSection/MainPageSection';
import MainPageContact from '../components/layouts/mainPageContactSect/MainPageContact';
import ImageLeftText from '../components/molecules/image-text-combinations/ImageLeftText';
import mainPageDescriptions from '../datafiles/descriptions';
import { Link } from 'react-router-dom'


const MainPage = () => {
  return (
    <>
      <LandingBackgroundTop />
      <MainPageSection 
      sectionTitle={"Hello, traveller"} 
          buttonContent={<Link to='/about'>Jump in</Link>} 
          buttonVariant={'dark'} 
          content={<ImageLeftText
          imageSource={'https://i.ibb.co/KxyBwGY/flask.png'}
          imageAlt={'Placeholder'} 
          titleMain={'Nice to meet you'} 
          description={mainPageDescriptions.about} 
          titleVariant={'l'} 
          descrVariant={'l'}/>}/>
      <MainPageSection sectionTitle={"Discover my projects"} buttonContent={<Link to="/projects">More projects</Link>} buttonVariant={'dark'}/>
      <MainPageContact />
    </>
  )
}

export default MainPage

