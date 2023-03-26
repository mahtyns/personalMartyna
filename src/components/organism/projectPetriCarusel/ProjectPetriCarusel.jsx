import Arrows from '../../atoms/project-Petri/Arrows'
import React, {useState} from 'react'
import PetriProjectsDisplay from '../../molecules/petri-3-projects/PetriProjectsDisplay'
import './petriCaruselStyles.css'
import {projectsPetri} from '../../../datafiles/projects'

const ProjectPetriCarusel = props => {

    const [indexArray,
        setIndexArray] = useState([0, 1, 2])

    const handleForth = () => {
        if (indexArray.indexOf(projectsPetri.length - 1) !== -1) {
            const newArray = [...indexArray];
            const ind = newArray.indexOf(projectsPetri.length - 1);
            newArray[ind] = 0;
            const newSetArray = newArray.map((el, index) => {
                if (index !== ind) 
                    return el + 1;
                else 
                    return el
            })
            setIndexArray(newSetArray)
        } else 
            setIndexArray(indexArray.map(item => item + 1))
    }

    const handleBack = () => {
        if (indexArray.indexOf(0) !== -1) {
            const newArray = [...indexArray];
            const ind = newArray.indexOf(0);
            newArray[ind] = projectsPetri.length - 1;
            const newSetArray = newArray.map((el, index) => {
                if (index !== ind) 
                    return el - 1;
                else 
                    return el
            })
            setIndexArray(newSetArray)
        } else 
            setIndexArray(indexArray.map(item => item - 1))
    }

    return (
        <div className='caruselContainer'>
            <div className='arrowsDisplayContainer' onClick={handleBack}>
                <Arrows isBack={true}/>
            </div>
            <div>
                <PetriProjectsDisplay projectsPetri={projectsPetri} indexArray={indexArray}/>
            </div>
            <div className='arrowsDisplayContainer' onClick={handleForth}>
                <Arrows/>
            </div>
        </div>
    )
}

export default ProjectPetriCarusel
