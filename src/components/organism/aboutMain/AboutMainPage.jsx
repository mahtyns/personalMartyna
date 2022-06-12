import React from 'react'
import MainPageSection from '../../layouts/mainPageSection/MainPageSection'
import PageTitle from '../../molecules/header-subheader/PageTitle'
import ImageLeftText from '../../molecules/image-text-combinations/ImageLeftText'
import './aboutMainPStyles.css'


const AboutMainPage = () => {
  return (
    <div className='aboutPageContainer'>
      <PageTitle headerContent={"About the scientist"} subheaderContent={"Get to know me better"}/>
      <MainPageSection sectionTitle={'Hello.'} 
      content={<ImageLeftText 
        titleMain={"I'm Martyna. Nice to meet you"} 
        description={'Blalbllbla'} 
        titleVariant='l'
        descrVariant={'m'}/> }/>
    </div>
  )
}

export default AboutMainPage