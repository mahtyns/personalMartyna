import Arrows from '../../atoms/project-Petri/Arrows'
import React, { useState } from 'react'
import PetriProjectsDisplay from '../../molecules/petri-3-projects/PetriProjectsDisplay'
import './petriCaruselStyles.css'
import { projectsPetri } from '../../../datafiles/projects'

const ProjectPetriCarusel = props => {

  const [indexArray, setIndexArray] = useState([0, 1, 2])

  const handleForth = () => {
    if (indexArray[2] === projectsPetri.length - 1) {

    }
    setIndexArray(indexArray.map(item => item + 1))
  }

  const handleBack = () => {
    if (indexArray[0] === 0 ) {
      

    }
    setIndexArray(indexArray.map(item => item - 1))
  }

  return (
    <div className='caruselContainer'>
        <div className='arrowsDisplayContainer' onClick={handleBack}>
            <Arrows isBack={true} />
        </div>
        <div>
            <PetriProjectsDisplay
            projectsPetri={projectsPetri}
            indexArray={indexArray}
/>
        </div>
        <div className='arrowsDisplayContainer' onClick={handleForth}>
            <Arrows />
        </div>
    </div>
  )
}

export default ProjectPetriCarusel
