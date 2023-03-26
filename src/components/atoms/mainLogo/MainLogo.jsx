import React from 'react'
import './mainLogoStyles.css'
import { Link } from 'react-router-dom'

const MainLogo = () => {
    return (
        <div className='mainLogoContainer'>
            {/* <img src="" alt='ToBeChanged-Logo Lab'/> */}
            <Link to='/' >
            <p>Martyna_Smolarek</p>
            </Link>
        </div>
    )
}

export default MainLogo
