import React from 'react'
import AboutMainPage from '../components/organism/aboutMain/AboutMainPage'
import MainPageSection from '../components/layouts/mainPageSection/MainPageSection';
import ImageLeftText from '../components/molecules/image-text-combinations/ImageLeftText';
import { aboutMeDescr } from '../datafiles/aboutMe';

const AboutPage = () => {
  return (
    <>
    <AboutMainPage />
      <MainPageSection sectionTitle={aboutMeDescr[0].title} 
      content={<ImageLeftText 
        titleMain={aboutMeDescr[0].subtitle} 
        description={aboutMeDescr[0].description} 
        imageSource={'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80'}
        imageAlt={'Placeholder'}
        titleVariant='l'
        descrVariant={'l'}/> }/>
    </>
  )
}

export default AboutPage