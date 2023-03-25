import './petriDisplayStyles.css'
import ProjectPetri from '../../atoms/project-Petri/ProjectPetri'
import ProjectPetriLabel from '../../atoms/project-Petri/ProjectPetriLabel'

const PetriProjectsDisplay = (props) => {
  return (
            <div className="petrisBehind">
      <ProjectPetri projectPetriAlt='Previous Project' projectImageSrc={props.projectsPetri[props.indexArray[0]].project_src}/>
      <ProjectPetri projectPetriAlt='Next Project' projectImageSrc={props.projectsPetri[props.indexArray[2]].project_src}/>
              <div className='petrisContainer'>
                <div className='petriDisplay'>
          <ProjectPetri projectPetriAlt='Current Project' projectImageSrc={props.projectsPetri[props.indexArray[1]].project_src} />
                <ProjectPetriLabel content={props.projectsPetri[props.indexArray[1]]}/>
                </div>
              </div>
            </div>

  )
}

export default PetriProjectsDisplay
