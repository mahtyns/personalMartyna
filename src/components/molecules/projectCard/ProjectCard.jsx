import classNames from 'classnames'
import React from 'react'
import Descriptions from '../../atoms/text-elements/Descriptions'
import ProjectName from '../../atoms/text-elements/ProjectName'
import ProjectSymbol from '../../atoms/text-elements/ProjectSymbol'
import ProjectYear from '../../atoms/text-elements/ProjectYear'
import './projectCardStyles.css'


const ProjectCard = ({ variant, project, projectYear, projectSymbol, projectName, projectCategory }) => {

  const projectVariants = classNames('projectCardContainer', 
    {
      'programming': variant === 'programming',
      'designCode': variant === 'designCode',
      'designUI': variant === 'designUI',
    }
  )

  return (
    <div className={projectVariants} onClick={() => console.log(project)} >
      <div className='projectInfoContainer'>
        <ProjectYear content={projectYear} />
        <ProjectSymbol content={projectSymbol} />
        <ProjectName content={projectName}/>
        <Descriptions variant={"m"} content={projectCategory} />
      </div>
    </div>
  )
}

export default ProjectCard