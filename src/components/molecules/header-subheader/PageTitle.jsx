import React from 'react'
import HeaderMain from '../../atoms/text-elements/HeaderMain'
import SubheaderMain from '../../atoms/text-elements/SubheaderMain'

const PageTitle = ({headerContent, subheaderContent}) => {
  return (
    <div>
        <HeaderMain content={headerContent}/>
        <SubheaderMain content={subheaderContent}/>
    </div>
  )
}

export default PageTitle