import React from 'react'
import MainPageSection from '../components/layouts/mainPageSection/MainPageSection';
import ImageLeftText from '../components/molecules/image-text-combinations/ImageLeftText';
import { aboutMeDescr } from '../datafiles/aboutMe';
import TechStackSection from '../components/layouts/techstack/TechStackSection';
import TextAll from '../components/molecules/image-text-combinations/TextAll';
import SectionTitles from '../components/molecules/header-subheader/SectionTitles';
import Button from '../components/atoms/button/Button';

const AboutPage = () => {
  return (
    <>
      <section id='AboutMe'> 
        <MainPageSection sectionTitle={aboutMeDescr[0].title} 
          content={<ImageLeftText 
          titleMain={aboutMeDescr[0].subtitle} 
          description={aboutMeDescr[0].description} 
          imageSource={'https://i.ibb.co/VmvyjTQ/lab.jpg'}
          imageAlt={'Martyna'}
          titleVariant={'l'}
          descrVariant={'l'}/> }/>
      </section>
      <section id='Education'>
          <TextAll content={aboutMeDescr[1].description} />
      </section>
      <section id='TechStack'>
        <TechStackSection />
      </section>
      <section id='Languages'>
        <TextAll content={aboutMeDescr[2].description} />
       
      </section>
      <div className='centeredContainer'>
        <a href='mailto:m.smolarek19@gmail.com'>
          <Button variant={'dark'} content={'Contact me'} />
        </a>
      </div>
    </>

  )
}


export default AboutPage