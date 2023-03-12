import React from 'react'

const Subtitle = (props) => {
  return (
    <div className='subtitleContainer'>
        <div className='subtitleText'>
            {props.content}
        </div>
    </div>
  )
}

export default Subtitle