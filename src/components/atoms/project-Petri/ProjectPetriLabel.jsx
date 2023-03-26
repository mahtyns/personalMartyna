import React from 'react'

import './projectPetriStyles.css'

const ProjectPetriLabel = (props) => {
    return (
        <div className="projectPetriLabeLContainer">
            <a href={props.content.project_link} target='_blank' rel='noreferrer'>
                <h1>
                    {props.content.project_name}
                </h1>
            </a>
            <h3>Year: {props.content.project_year}
            </h3>
            <p>
                {props.content.project_short}
            </p>
        </div>
    )
}

export default ProjectPetriLabel
