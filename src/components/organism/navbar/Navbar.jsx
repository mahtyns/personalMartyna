import React from 'react'
import './navbarStyles.css'
import NavigationLink from '../../atoms/navigationLink/NavigationLink'
import MainLogo from '../../atoms/mainLogo/MainLogo'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className='navigationContainer'>
        <div className='navLogoContainer'>
            <MainLogo />
        </div>
        <div className='navLinkContainer'>
            <Link to='/'><NavigationLink navigationLink={"The Lab"} /></Link>
            <Link to='/projects'><NavigationLink navigationLink={"Experiments"} /></Link>
            <Link to='/about'><NavigationLink navigationLink={"The Scientist"} /></Link>
            {/* <Link to='/contact'><NavigationLink navigationLink={"Contact"} /></Link> */}
        </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar