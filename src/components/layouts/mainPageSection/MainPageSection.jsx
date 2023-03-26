import classNames from 'classnames';
import React from 'react'
import Button from '../../atoms/button/Button';
import SectionHeader from '../../atoms/text-elements/SectionHeader';

const MainPageSection = (props) => {

  const sectionStyles = classNames('sectionContainer', {
    'extended': props.isExtended === true,
    'projects': props.projects === true
  })

  return (
    <div className={sectionStyles}>
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