import React from 'react'

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