import React from 'react'
import PageTitle from '../../molecules/header-subheader/PageTitle'
import './projectPageStyles.css';
import ProjectTable from '../../layouts/projectTable/ProjectTable';
import { projectsAbout } from '../../../datafiles/projects';
import ProjectContainer from '../../layouts/projectContainer/ProjectContainer';

const ProjectPageMain = () => {
  return (
    <div className='projectPageContainer'>
        <PageTitle headerContent={"My Experiments"} subheaderContent={"Discover my projects"} />
        <ProjectTable projects={projectsAbout} />
        <ProjectContainer />
    </div>
  )
}

export default ProjectPageMain