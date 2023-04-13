import React from 'react'
import './textStyles.css'

const HeaderMain = ( props) => {
  return (
    <div className='headerContainer'>
        <h1 className='headerContent'>
            {props.content}
        </h1>
    </div>
  )
}

export default HeaderMain