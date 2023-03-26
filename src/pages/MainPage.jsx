import React from 'react'
import LandingBackgroundTop from '../components/landing-elements/landing-background/LandingBackgroundTop';
import MainPageSection from '../components/layouts/mainPageSection/MainPageSection';
import MainPageContact from '../components/layouts/mainPageContactSect/MainPageContact';
import ImageLeftText from '../components/molecules/image-text-combinations/ImageLeftText';
import mainPageDescriptions from '../datafiles/descriptions';
import { Link } from 'react-router-dom'
import ProjectPetriCarusel from '../components/organism/projectPetriCarusel/ProjectPetriCarusel';


const MainPage = () => {
  return (
    <>
      <LandingBackgroundTop />
      <MainPageSection 
          sectionTitle={"Hello, traveller"} 
          buttonContent={<Link to='/about'>Jump in</Link>} 
          buttonVariant={'dark'} 
          content={<ImageLeftText
          imageSource={null}
          imageAlt={null} 
          titleMain={'Nice to meet you'} 
          description={mainPageDescriptions.about} 
          titleVariant={'l'} 
          descrVariant={'l'}/>}/>
      <MainPageSection 
          sectionTitle={"Discover my projects"} 
          content={<ProjectPetriCarusel />}
          buttonContent={<Link to="/projects">More projects</Link>} 
          buttonVariant={'dark'}
          isExtended={true}/>
      <MainPageContact />
    </>
  )
}

export default MainPage

