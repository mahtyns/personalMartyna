import React from 'react'
import './textStyles.css'

const ProjectYear = ({content}) => {
  return (
    <div className='projectYearContainer'>
        <div className='projectYearText'> 
            {content}
        </div>
    </div>
  )
}

export default ProjectYear