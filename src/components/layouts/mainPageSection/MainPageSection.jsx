import React from 'react'
import Button from '../../atoms/button/Button';
import SectionHeader from '../../atoms/text-elements/SectionHeader';
import './mainPageSectionStyles.css';

const MainPageSection = ({sectionTitle, content, buttonVariant, buttonContent}) => {
  return (
    <div className='sectionContainer'>
        <div className='sectionWrapper'>
            <SectionHeader sectionTitle={sectionTitle}/>
            <div className='sectionContent'>
            {content}
            </div>
            <Button variant={buttonVariant} content={buttonContent} />
        </div>
    </div>
  )
}

export default MainPageSection