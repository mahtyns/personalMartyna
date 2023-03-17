import './projectPetriStyles.css'

const ProjectPetri = (props) => {
  return (
    <div className='projectPetriDish'>
        <div className="projectPetriInside">
            <img alt={props.projectPetriAlt} src={props.projectImageSrc}/>
        </div>
    </div>
  )
}

export default ProjectPetri