import React from 'react';
import './projectTableStyles.css';
import ProjectCard from '../../molecules/projectCard/ProjectCard';

const ProjectTable = (props) => {

    return (
        <div className='projectTableContainer'>
            <div className="projectTableWrapper">
                <div className="projectTableGrid">
                    {props.projects.map((project) => <ProjectCard
                        key={project.project_symbol}
                        variant={project.project_type}
                        project={project}
                        changePanelPresentation={props.changePanelPresentation}/>)}
                </div>
            </div>
        </div>
    )
}

export default ProjectTable