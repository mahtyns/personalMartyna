import React from 'react'
import HeaderMain from '../../atoms/text-elements/HeaderMain'
import SubheaderMain from '../../atoms/text-elements/SubheaderMain'

const PageTitle = (props) => {
  return (
    <div>
        <HeaderMain content={props.headerContent}/>
        <SubheaderMain content={props.subheaderContent}/>
    </div>
  )
}

export default PageTitle