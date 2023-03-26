import React from 'react'
import LandingBackgroundTop from '../components/landing-elements/landing-background/LandingBackgroundTop';
import MainPageSection from '../components/layouts/mainPageSection/MainPageSection';
import MainPageContact from '../components/layouts/mainPageContactSect/MainPageContact';
import ImageLeftSquareText from '../components/molecules/image-text-combinations/ImageLeftSquareText';
import mainPageDescriptions from '../datafiles/descriptions';
import { Link } from 'react-router-dom'
import ProjectPetriCarusel from '../components/organism/projectPetriCarusel/ProjectPetriCarusel';


const MainPage = () => {
  return (
    <>
      <section id='Landing'>
        <LandingBackgroundTop />
      </section>
      <section id='About'>
        <MainPageSection 
            sectionTitle={"Hello, traveller"} 
            buttonContent={<Link to='/about'>Jump in</Link>} 
            buttonVariant={'dark'} 
            content={<ImageLeftSquareText
              imageSource={'https://i.ibb.co/g4TkfKG/kosmo.png'}
            imageAlt={'Interstellar journey'} 
            titleMain={'Nice to meet you'} 
            description={mainPageDescriptions.about} 
            titleVariant={'l'} 
            descrVariant={'l'}/>}/>
      </section>
      <section id='Projects'>
        <MainPageSection 
            sectionTitle={"Discover my projects"} 
            content={<ProjectPetriCarusel />}
            buttonContent={<Link to="/projects">More projects</Link>} 
            buttonVariant={'dark'}
            projects={true}/>
      </section>
      <section id='Contact'>
        <MainPageContact />
      </section>
    </>
  )
}
export default MainPage

