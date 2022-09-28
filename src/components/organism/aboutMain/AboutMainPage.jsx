import React from 'react'
import PageTitle from '../../molecules/header-subheader/PageTitle'
import './aboutMainPStyles.css'


const AboutMainPage = () => {
  return (
    <div className='aboutPageContainer'>
      <PageTitle headerContent={"About the scientist"} subheaderContent={"Get to know me better"}/>
    </div>
  )
}

export default AboutMainPage