import React from 'react'
import Descriptions from '../../atoms/text-elements/Descriptions'
import Links from '../../atoms/text-elements/Links'
import ProjectYear from '../../atoms/text-elements/ProjectYear'
import TitleMain from '../../atoms/text-elements/TitleMain'

const ProjectDescription = ({projectName, projectDescr, projectYear, projectLinkSource, projectLinkName}) => {
  return (
    <div className="projectDescriptionContainer">
        <div className="projectDescrWrapper">
            <ProjectYear content={projectYear} />
            <TitleMain content={projectName} variant={'l'}/>
            <Descriptions content={projectDescr} variant={'l'} textransform={'none'}/>
            <Links content={'Find more here: '} source={projectLinkSource} linkName={projectLinkName} />
        </div>
    </div>
  )
}

export default ProjectDescription