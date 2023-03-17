import React from 'react'
import Descriptions from '../../atoms/text-elements/Descriptions'
import Links from '../../atoms/text-elements/Links'
import ProjectYear from '../../atoms/text-elements/ProjectYear'
import TitleMain from '../../atoms/text-elements/TitleMain'

const ProjectDescription = (props) => {
  return (
    <div className="projectDescriptionContainer">
        <div className="projectDescrWrapper">
            <ProjectYear content={props.project.project_year} />
        <TitleMain content={props.project.project_name} variant={'l'}/>
        <Descriptions content={props.project.project_subtitle} variant={'l'} textransform={'none'}/>
        <Descriptions content={props.project.project_description} variant={'m'} textransform={'none'}/>
        {props.project.project_category !== 'Design' ? ( <>
        <Links content={'Code page: '} source={props.project.project_link} linkName={'Github'} />
        <Links content={'Live: '} source={props.project.project_link_deployed} linkName={'Visit page'} />
        </>
        )
        : <Links content = { 'Find more here: ' } source = {props.project.project_link} linkName={'Behance Project Page'} /> }
        {/* <Links content={'Find more here: '} source={props.project.project_link} linkName={props.projectLinkName} />
        <Links content={'Live: '} source={props.project.project_link_deployed} linkName={props.projectLinkName} /> */}
        </div>
    </div>
  )
}

export default ProjectDescription