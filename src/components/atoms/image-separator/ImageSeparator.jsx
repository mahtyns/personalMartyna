import React from 'react'
import './imageSeparatorStyles.css'


const ImageSeparator = ( {imageSource, imageAlt} ) => {
  return (
    <div className='imageSepContainer'>
        <div className='imageSepWrapper'>
              <img src={imageSource} alt={imageAlt} />
        </div>
    </div>
  )
}

export default ImageSeparator