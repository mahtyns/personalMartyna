import React from 'react'

import './projectPetriStyles.css'

const ProjectPetriLabel = (props) => {
    return (
        <div className="projectPetriLabeLContainer">
            <h1>
                {props.content.project_name}
            </h1>
            <h3>Year: {props.content.project_year}
            </h3>
            <p>
              {props.content.project_short}
            </p>
        </div>
    )
}

export default ProjectPetriLabel
