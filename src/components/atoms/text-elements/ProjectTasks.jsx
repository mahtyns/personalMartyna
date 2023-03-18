import React from 'react'

const ProjectTasks = (props) => {
  return (
    <div className='projectTask'>
          <img alt='bullet' src='https://cdn-icons-png.flaticon.com/512/9282/9282730.png' />
        <p>{props.content}</p>
    </div>
  )
}

export default ProjectTasks