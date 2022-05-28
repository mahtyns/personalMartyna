import React from 'react'
import './textStyles.css'


const SubheaderMain = ({content}) => {
  return (
    <div className='subheaderContainer'>
        <div className='subheaderContent'>
            {content}
        </div>
    </div>
  )
}

export default SubheaderMain