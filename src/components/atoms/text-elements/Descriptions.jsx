import React from 'react'
import './textStyles.css'

const Descriptions = ({content}) => {
  return (
    <div className='descriptionContainer'>
        <div className='descriptionText'>
            {content}
        </div>
    </div>
  )
}

export default Descriptions