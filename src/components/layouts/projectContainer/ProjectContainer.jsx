import React from 'react'
import ProjectImageStack from '../../molecules/project-image/ProjectImageStack'
import ProjectDescription from '../../molecules/project-description/ProjectDescription'
import './projectContainerStyles.css';


const ProjectContainer = (props) => {
  return (
    <div className="projectPanelContainer">
      <div className="projectPanelWrapper">
        <div className="projectImage">
          <ProjectImageStack content={props.projectPresented.project_stack} imageAlt="Test" imageSource={props.projectPresented.project_imagesrc}/>
        </div>
        <div className="projectDescription">
          <ProjectDescription project={props.projectPresented} />
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer