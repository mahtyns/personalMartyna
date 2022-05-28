import React from 'react'
import PageTitle from '../../molecules/header-subheader/PageTitle'
import './projectPageStyles.css'

const ProjectPageMain = () => {
  return (
    <div className='projectPageContainer'>
        <PageTitle headerContent={"My Experiments"} subheaderContent={"Discover my projects"} />
    </div>
  )
}

export default ProjectPageMain