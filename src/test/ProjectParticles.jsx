import React, {useRef} from 'react'

const ProjectParticles = (props) => {

    const canvasRef = useRef(null)

  return (
    <canvas ref={canvasRef} {...props} />
  )
}

export default ProjectParticles