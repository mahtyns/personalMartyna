import React from 'react';
import './textStyles.css';


const SectionSubheader = ({ sectionSubTitle }) => {
    return (
        <h1 className='sectionSubeader'>
            {sectionSubTitle}
        </h1>
    )
}

export default SectionSubheader