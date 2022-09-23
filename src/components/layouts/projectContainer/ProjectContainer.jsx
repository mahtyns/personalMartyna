import React from 'react'
import ProjectImage from '../../molecules/project-image/ProjectImage'
import ProjectDescription from '../../molecules/project-description/ProjectDescription'
import './projectContainerStyles.css';


const ProjectContainer = ({projectPresented}) => {
  return (
    <div className="projectPanelContainer">
      <div className="projectPanelWrapper">
        <div className="projectImage">
          <ProjectImage content={projectPresented.project_stack} imageAlt="Test" imageSource={projectPresented.project_imagesrc}/>
        </div>
        <div className="projectDescription">
          <ProjectDescription project={projectPresented} projectLinkName={'Project Page'}/>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer