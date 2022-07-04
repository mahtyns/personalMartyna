import React from 'react';
import './projectTableStyles.css';
import ProjectCard from '../../molecules/projectCard/ProjectCard';
import { useState } from 'react';

const ProjectTable = ({ projects }) => {
  const [projectPresented, setProjectPresented] = useState({})

  const changePanelPresentation = ({ panelChange }) => {
    setProjectPresented(panelChange)
    console.log(projectPresented)
  }


  return (
    <div className='projectTableContainer'>
        <div className="projectTableWrapper">
            <div className="projectTableGrid">
                {projects.map((project) => <ProjectCard 
                    key={project.project_symbol}
                    variant={project.project_type} 
                    projectName={project.project_name} 
                    projectSymbol={project.project_symbol}
                    projectYear={project.project_year}
                    projectCategory={project.project_category}
                    project={project}
                    changePanelPresentation={changePanelPresentation}
                     /> )}
            </div>
        </div>
    </div>
  )
}

export default ProjectTable