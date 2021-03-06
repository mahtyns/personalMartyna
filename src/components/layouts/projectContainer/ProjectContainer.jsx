import React from 'react'
import ProjectImage from '../../molecules/project-image/ProjectImage'
import ProjectDescription from '../../molecules/project-description/ProjectDescription'
import './projectContainerStyles.css';


const ProjectContainer = ({projectPresented}) => {
  return (
    <div className="projectPanelContainer">
      <div className="projectPanelWrapper">
        <div className="projectImage">
          <ProjectImage content={projectPresented.project_stack} imageAlt="Test" imageSource={'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80'}/>
        </div>
        <div className="projectDescription">
          <ProjectDescription project={projectPresented} projectLinkName={'Project Page at Behance'}/>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer