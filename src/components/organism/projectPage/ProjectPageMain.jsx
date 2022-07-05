import React from 'react'
import PageTitle from '../../molecules/header-subheader/PageTitle'
import './projectPageStyles.css';
import ProjectTable from '../../layouts/projectTable/ProjectTable';
import { projectsAbout } from '../../../datafiles/projects';
import ProjectContainer from '../../layouts/projectContainer/ProjectContainer';
import { useState } from 'react';

const ProjectPageMain = () => {

  // const [panelOpen, setPanelOpen] = useState(false)
  const [projectPresented, setProjectPresented] = useState()

  const changePanelPresentation = (addedProject) => {
    setProjectPresented(addedProject)
  }
  
  return (
    <div className='projectPageContainer'>
        <PageTitle headerContent={"My Experiments"} subheaderContent={"Discover my projects"} />
      <ProjectTable projects={projectsAbout} changePanelPresentation={changePanelPresentation} />
      {projectPresented ? <ProjectContainer projectPresented={projectPresented} /> : null }
      <button onClick={()=>console.log(projectPresented)}>Ck</button>
    </div>
  )
}

export default ProjectPageMain