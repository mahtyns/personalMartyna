import React from 'react';
import './textStyles.css';


const SectionHeader = ({sectionTitle}) => {
  return (
    <h1 className='sectionHeader'>
        {sectionTitle}
    </h1>
  )
}

export default SectionHeader