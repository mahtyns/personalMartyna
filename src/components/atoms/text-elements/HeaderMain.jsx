import React from 'react'
import './textStyles.css'

const HeaderMain = ( {content}) => {
  return (
    <div className='headerContainer'>
        <div className='headerContent'>
            {content}
        </div>
    </div>
  )
}

export default HeaderMain