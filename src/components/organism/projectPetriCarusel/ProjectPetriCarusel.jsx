// import {useState} from 'react'
import Arrows from '../../atoms/project-Petri/Arrows'
import PetriProjectsDisplay from '../../molecules/petri-3-projects/PetriProjectsDisplay'
import './petriCaruselStyles.css'

const ProjectPetriCarusel = props => {

    // const [activeIndex, setActiveIndex] = useState(0)


  return (
    <div className='caruselContainer'>
        <div className='arrowsDisplayContainer'>
            <Arrows isBack={true} />
            <Arrows />
        </div>
        <PetriProjectsDisplay />
    </div>
  )
}


export default ProjectPetriCarusel