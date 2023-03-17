import React from 'react'
import SectionHeader from '../../atoms/text-elements/SectionHeader'
import SectionSubheader from '../../atoms/text-elements/SectionSubheader'

const SectionTitles = (props) => {
  return (
    <div>
          <SectionHeader sectionTitle={props.sectionTitle} />
        <SectionSubheader sectionSubTitle={props.sectionSubtitle}/>
    </div>
  )
}

export default SectionTitles