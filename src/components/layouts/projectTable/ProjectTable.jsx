import React from 'react';
import './projectTableStyles.css';
import ProjectCard from '../../molecules/projectCard/ProjectCard';
import { useState } from 'react';

const ProjectTable = ({ projects }) => {
  const [projectPresented, setProjectPresented] = useState({})

  const changePanelPresentation = ({ project }) => {
    console.log(project)
  }


  return (
    <div className='projectTableContainer'>
        <div className="projectTableWrapper">
            <div className="projectTableGrid">
                {projects.map((project) => <ProjectCard 
                    key={project.project_symbol}
                    variant={project.project_type} 
                    project={project}
                    changePanelPresentation={changePanelPresentation}
                     /> )}
            </div>
        </div>
    </div>
  )
}

export default ProjectTable