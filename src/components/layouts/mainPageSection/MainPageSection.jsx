import React from 'react'
import Button from '../../atoms/button/Button';
import SectionHeader from '../../atoms/text-elements/SectionHeader';
import './mainPageSectionStyles.css';

const MainPageSection = (props) => {
  return (
    <div className='sectionContainer'>
        <div className='sectionWrapper'>
            <SectionHeader sectionTitle={props.sectionTitle}/>
            <div className='sectionContent'>
            {props.content}
            </div>
            {props.buttonContent ? <Button variant={props.buttonVariant} content={props.buttonContent} /> : null}
        </div>
    </div>
  )
}

export default MainPageSection