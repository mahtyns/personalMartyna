import React from 'react'
import TextCentered from '../../atoms/text-elements/TextCentered'
import PageTitle from '../../molecules/header-subheader/PageTitle'
import { contactData } from '../../../datafiles/contactData'
import './contactPageMainStyles.css'

const ContactPageMain = () => {
  return (
    <div className='contactPageContainer'>
          <PageTitle headerContent={"Looking for me?"} subheaderContent={"My contact info"}/>
          <TextCentered content={contactData[0]} variant={'s'}></TextCentered>
    </div>
  )
}

export default ContactPageMain