import './petriDisplayStyles.css'
import { projectsPetri } from '../../../datafiles/projects'
import ProjectPetri from '../../atoms/project-Petri/ProjectPetri'

const PetriProjectsDisplay = () => {

  let projectIndex = 1;  

  return (   
            <div className="petrisBehind">
                <ProjectPetri projectPetriAlt={projectsPetri[projectIndex-1].project_name} projectImageSrc={projectsPetri[projectIndex-1].project_src}/>
                <ProjectPetri projectPetriAlt={projectsPetri[projectIndex+1].project_name} projectImageSrc={projectsPetri[projectIndex+1].project_src}/>
          <div className='petrisContainer'>
              <ProjectPetri projectPetriAlt={projectsPetri[projectIndex].project_name} projectImageSrc={projectsPetri[projectIndex].project_src} />
            </div>
    </div>
  )
}

export default PetriProjectsDisplay