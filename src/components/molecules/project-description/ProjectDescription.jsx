import React from 'react'
import Descriptions from '../../atoms/text-elements/Descriptions'
import ProjectYear from '../../atoms/text-elements/ProjectYear'
import TitleMain from '../../atoms/text-elements/TitleMain'

const ProjectDescription = ({projectName, projectDescr, projectYear}) => {
  return (
    <div className="projectDescriptionContainer">
        <div className="projectDescrWrapper">
            <TitleMain content={projectName}/>
            <Descriptions content={projectDescr} variant={'l'}/>
            <ProjectYear content={projectYear}/>
        </div>
    </div>
  )
}

export default ProjectDescription