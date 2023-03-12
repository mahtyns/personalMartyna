import React from 'react'
import './textStyles.css'

const HeaderMain = ( props) => {
  return (
    <div className='headerContainer'>
        <div className='headerContent'>
            {props.content}
        </div>
    </div>
  )
}

export default HeaderMain