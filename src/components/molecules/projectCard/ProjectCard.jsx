import classNames from 'classnames'
import React from 'react'
import Descriptions from '../../atoms/text-elements/Descriptions'
import ProjectName from '../../atoms/text-elements/ProjectName'
import ProjectSymbol from '../../atoms/text-elements/ProjectSymbol'
import ProjectYear from '../../atoms/text-elements/ProjectYear'
import './projectCardStyles.css'


const ProjectCard = ({ variant, project, changePanelPresentation }) => {

  const projectVariants = classNames('projectCardContainer', 
    {
      'programming': variant === 'programming',
      'designCode': variant === 'designCode',
      'designUI': variant === 'designUI',
    }
  )
  
  

  return (
    <div 
    className={projectVariants} 
    onClick={() => changePanelPresentation(project)} >
      <div className='projectInfoContainer'>
        <ProjectYear content={project.project_year} />
        <ProjectSymbol content={project.project_symbol} />
        <ProjectName content={project.project_name}/>
        <Descriptions variant={"m"} content={project.project_category} />
      </div>
    </div>
  )
}

export default ProjectCard