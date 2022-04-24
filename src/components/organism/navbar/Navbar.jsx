import React from 'react'
import './navbarStyles.css'
import NavigationLink from '../../atoms/navigationLink/NavigationLink'
import MainLogo from '../../atoms/mainLogo/MainLogo'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className='navigationContainer'>
        <div className='navLogoContainer'>
            <MainLogo />
        </div>
        <div className='navLinkContainer'>
            <NavigationLink navigationLink={"The Lab"} />
            <NavigationLink navigationLink={"Experiments"} />
            <NavigationLink navigationLink={"The Scientist"} />
            <NavigationLink navigationLink={"Contact"} />
        </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar