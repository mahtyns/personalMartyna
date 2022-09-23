import React from 'react'
import Descriptions from '../../atoms/text-elements/Descriptions'
import Links from '../../atoms/text-elements/Links'
import ProjectYear from '../../atoms/text-elements/ProjectYear'
import TitleMain from '../../atoms/text-elements/TitleMain'

const ProjectDescription = ({project, projectLinkName}) => {
  return (
    <div className="projectDescriptionContainer">
        <div className="projectDescrWrapper">
            <ProjectYear content={project.project_year} />
        <TitleMain content={project.project_name} variant={'l'}/>
        <Descriptions content={project.project_subtitle} variant={'l'} textransform={'none'}/>
        <Descriptions content={project.project_description} variant={'m'} textransform={'none'}/>
        <Links content={'Find more here: '} source={project.project_link} linkName={projectLinkName} />
        </div>
    </div>
  )
}

export default ProjectDescription