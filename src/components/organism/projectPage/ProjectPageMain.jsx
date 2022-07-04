import React from 'react'
import PageTitle from '../../molecules/header-subheader/PageTitle'
import './projectPageStyles.css';
import ProjectTable from '../../layouts/projectTable/ProjectTable';
import { projectsAbout } from '../../../datafiles/projects';
import ProjectContainer from '../../layouts/projectContainer/ProjectContainer';
import { useState } from 'react';

const ProjectPageMain = () => {

  // const [panelOpen, setPanelOpen] = useState(false)
  const [projectPresented, setProjectPresented] = useState([])

  const changePanelPresentation = ({panelChange}) => {
    setProjectPresented(panelChange)
    console.log(projectPresented)
  }
  
  return (
    <div className='projectPageContainer'>
        <PageTitle headerContent={"My Experiments"} subheaderContent={"Discover my projects"} />
      <ProjectTable projects={projectsAbout} />
      <ProjectContainer projects={projectsAbout} />
    </div>
  )
}

export default ProjectPageMain