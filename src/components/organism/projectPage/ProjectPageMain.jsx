import React from 'react'
import PageTitle from '../../molecules/header-subheader/PageTitle'
import './projectPageStyles.css';
import ProjectTable from '../../layouts/projectTable/ProjectTable';
import {projectsAbout} from '../../../datafiles/projects';
import ProjectContainer from '../../layouts/projectContainer/ProjectContainer';
import {useState} from 'react';

const ProjectPageMain = () => {

    const [panelOpen, setPanelOpen] = useState(false)
    const [projectPresented,
        setProjectPresented] = useState()

    const changePanelPresentation = (addedProject) => {
        if (!panelOpen) setPanelOpen(!panelOpen)
        setProjectPresented(addedProject)
    }

    const closeProjectPresentation = () => {
        setPanelOpen(!panelOpen)
    }

    return (
        <div className='sectionContainerP'>
            <PageTitle
                headerContent={"My Experiments"}
                subheaderContent={"Discover my projects"}/>
            <ProjectTable
                projects={projectsAbout}
                changePanelPresentation={changePanelPresentation}/> 
                
                {panelOpen
                ? <ProjectContainer 
                projectPresented={projectPresented}
                closeProjectPresentation={closeProjectPresentation}/>
                : (<div className='panelClosed'>
                    <p>Click on some project card</p>
                </div>)}
        </div>
    )
}

export default ProjectPageMain