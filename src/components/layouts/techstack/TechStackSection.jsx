import React from 'react'
import SectionHeader from '../../atoms/text-elements/SectionHeader'
import SectionSubheader from '../../atoms/text-elements/SectionSubheader'
import DesignTools from '../../molecules/techstackTools/DesignTools'
import TechStackTools from '../../molecules/techstackTools/TechStackTools'
import './TechStackStyles.css'

const TechStackSection = props => {

  return (
        <div className="techStackContainer">
            <div className="techStackTitles">
                <SectionHeader sectionTitle={'Incubators, pipettes, centrifuges'}/>
                <SectionSubheader sectionSubTitle={'Technology tools I use'} />
            </div>
            <div className="techStackToolsWrapper">
                <TechStackTools toolsCategory={'Frontend'} />
                <TechStackTools toolsCategory={'Backend'}/>
                <DesignTools toolsCategory={'Design'}/>
                <TechStackTools toolsCategory={'Other'}/>
            </div>
        </div>
    )
}


export default TechStackSection