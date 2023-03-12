import React from 'react'

const ImageProject = (props) => {
  return (
    <div className='imageProjectContainer'>
        <img alt={props.imageAlt} src={props.imageSource} />
    </div>
  )
}

export default ImageProject