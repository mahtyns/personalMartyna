import classNames from 'classnames'
import './projectPetriStyles.css'

const ProjectPetri = (props) => {

    const projectPetriStyles = classNames('projectPetriDish', {
        'petriBehind': props.isBehind === true
    })

    return (
        <div className={projectPetriStyles}>
            <div className="projectPetriInside">
                <img alt={props.projectPetriAlt} src={props.projectImageSrc}/>
            </div>
        </div>
    )
}

export default ProjectPetri