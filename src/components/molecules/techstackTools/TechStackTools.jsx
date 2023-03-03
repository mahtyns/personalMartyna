import React from 'react'
import TextCentered from '../../atoms/text-elements/TextCentered'

const TechStackTools = ({toolsCategory, toolsList}) => {
  return (
    <>
        <TextCentered variant={'s'} content={ toolsCategory } />
        <div className="toolsWrapper">
        </div>
    </>
  )
}

export default TechStackTools