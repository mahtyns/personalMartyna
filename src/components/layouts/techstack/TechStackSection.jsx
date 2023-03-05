import React from 'react'
import SectionHeader from '../../atoms/text-elements/SectionHeader'
import SectionSubheader from '../../atoms/text-elements/SectionSubheader'
// import DesignTools from '../../molecules/techstackTools/DesignTools'
import TechStackTools from '../../molecules/techstackTools/TechStackTools'
import './TechStackStyles.css'
import { backEndTools, designTools, otherTools } from '../../../datafiles/stack'
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
                <TechStackTools toolsCategory={'Backend'} toolsList={backEndTools}/>
                <TechStackTools toolsCategory={'Design'} toolsList={designTools} />
                <TechStackTools toolsCategory={'Other'} toolsList={otherTools}/> 
            </div>
        </div>
    )
}


export default TechStackSection