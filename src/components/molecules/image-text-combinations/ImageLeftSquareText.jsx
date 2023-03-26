import React from 'react'
import Descriptions from '../../atoms/text-elements/Descriptions'
import TitleMain from '../../atoms/text-elements/TitleMain'
import './combinationsStyles.css'

const ImageLeftSquareText = (props) => {
    return (
        <div className='imgTextCombinationContainer'>
            <div className='imgSquareWrapper'>
                <img src={props.imageSource} alt={props.imageAlt} />
                <div className='textContents'>
                    <TitleMain content={props.titleMain} variant={props.titleVariant} />
                    <Descriptions content={props.description} variant={props.descrVariant} />
                </div>
            </div>
        </div>
    )
}

export default ImageLeftSquareText