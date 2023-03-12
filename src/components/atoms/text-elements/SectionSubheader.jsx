import React from 'react';
import './textStyles.css';


const SectionSubheader = (props) => {
    return (
        <h1 className='sectionSubeader'>
            {props.sectionSubTitle}
        </h1>
    )
}

export default SectionSubheader