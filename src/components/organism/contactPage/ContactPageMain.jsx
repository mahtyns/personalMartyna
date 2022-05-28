import React from 'react'
import PageTitle from '../../molecules/header-subheader/PageTitle'
import './contactPageMainStyles.css'

const ContactPageMain = () => {
  return (
    <div className='contactPageContainer'>
          <PageTitle headerContent={"Looking for me?"} subheaderContent={"My contact info"}/>
    </div>
  )
}

export default ContactPageMain