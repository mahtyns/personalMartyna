import React from 'react'

const ImageProject = ({imageSource, imageAlt}) => {
  return (
    <div className='imageProjectContainer'>
        <img alt={imageAlt} src={imageSource} />
    </div>
  )
}

export default ImageProject