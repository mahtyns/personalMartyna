import React from 'react'
import SectionHeader from '../../atoms/text-elements/SectionHeader'
import SectionSubheader from '../../atoms/text-elements/SectionSubheader'
import TechStackTools from '../../molecules/techstackTools/TechStackTools'
import './TechStackStyles.css'
import { stackToolsFE } from '../../../datafiles/stack'

const TechStackSection = props => {
  return (
        <div className="techStackContainer">
            <div className="techStackTitles">
                <SectionHeader sectionTitle={'Incubators, pipettes, centrifuges'}/>
                <SectionSubheader sectionSubTitle={'Technology tools I use'} />
            </div>
            <div className="techStackToolsWrapper">
                <TechStackTools toolsCategory={'Frontend'} toolsList={stackToolsFE}/>
                <TechStackTools toolsCategory={'Backend'}/>
                <TechStackTools toolsCategory={'Design'}/>
                <TechStackTools toolsCategory={'Other'}/>
            </div>
        </div>
    )
}


export default TechStackSection