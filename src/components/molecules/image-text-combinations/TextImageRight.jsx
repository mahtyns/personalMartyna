import React from 'react'
import Descriptions from '../../atoms/text-elements/Descriptions'
import TitleMain from '../../atoms/text-elements/TitleMain'
import './combinationsStyles.css'


const TextImageRight = ({ imageSource, imageAlt, titleMain, description, titleVariant, descrVariant }) => {
  return (
    <div className='imgTextCombinationContainer'>
      <div className='imgTextWrapper'>
        <div className='textContents'>
          <TitleMain content={titleMain} variant={titleVariant} />
          <Descriptions content={description} variant={descrVariant} />
        </div>
        <img src={imageSource} alt={imageAlt} />
      </div>
    </div>
  )
}

export default TextImageRight