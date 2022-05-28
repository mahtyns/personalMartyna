import React from 'react'
import './textStyles.css'


const ProjectSymbol = ({content}) => {
  return (
    <div className='symbolContainer'>
        <div className='symbolContent'>
            {content}
        </div>
    </div>
  )
}

export default ProjectSymbol