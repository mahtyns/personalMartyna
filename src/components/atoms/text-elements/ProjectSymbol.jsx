import React from 'react'
import './textStyles.css'


const ProjectSymbol = (props) => {
  return (
    <div className='symbolContainer'>
        <div className='symbolContent'>
            {props.content}
        </div>
    </div>
  )
}

export default ProjectSymbol