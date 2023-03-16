import React from 'react'
import MainPageSection from '../components/layouts/mainPageSection/MainPageSection';
import ImageLeftText from '../components/molecules/image-text-combinations/ImageLeftText';
import { aboutMeDescr } from '../datafiles/aboutMe';
import TechStackSection from '../components/layouts/techstack/TechStackSection';

const AboutPage = () => {
  return (
    <>
      <MainPageSection sectionTitle={aboutMeDescr[0].title} 
      content={<ImageLeftText 
        titleMain={aboutMeDescr[0].subtitle} 
        description={aboutMeDescr[0].description} 
        imageSource={'https://i.ibb.co/VmvyjTQ/lab.jpg'}
        imageAlt={'Placeholder'}
        titleVariant={'l'}
        descrVariant={'l'}/> }/>
      <TechStackSection />
    </>

  )
}


export default AboutPage