import React from 'react';
import './projectTableStyles.css';
import ProjectCard from '../../molecules/projectCard/ProjectCard';

const ProjectTable = ({projects}) => {
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
                     /> )}
            </div>
        </div>
    </div>
  )
}

export default ProjectTable