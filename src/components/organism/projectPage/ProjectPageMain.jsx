import React from 'react'
import PageTitle from '../../molecules/header-subheader/PageTitle'
import ProjectCard from '../../molecules/projectCard/ProjectCard'
import './projectPageStyles.css'

const ProjectPageMain = () => {
  return (
    <div className='projectPageContainer'>
        <PageTitle headerContent={"My Experiments"} subheaderContent={"Discover my projects"} />
        {/* <ProjectCard variant={"designUI"} projectYear={"2020"} projectSymbol={"Ms"} projectName={"MyShop"} projectCategory={"Ecommerce App"}/> */}
    </div>
  )
}

export default ProjectPageMain