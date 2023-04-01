import {useState} from 'react'
import './navbarStyles.css'
import NavigationLink from '../../atoms/navigationLink/NavigationLink';
import NavigationLinkSide from '../../atoms/navigationLink/NavigationLinkSide';
import MainLogo from '../../atoms/mainLogo/MainLogo'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [isMenuToggled, setMenuToggled] = useState(false)

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
        { !isMenuToggled ?
        (<div className='burgerMenu'>
           <div className='burgerIcon'
           onClick={()=> setMenuToggled(true)}>
              <img alt='burger' src='https://cdn-icons-png.flaticon.com/512/9301/9301743.png'/>
           </div>
        </div>) : null
          }
        {
          isMenuToggled ? (
          <div className='sideMenu'>
            <div className='sideMenuContentContainer'>
                <div className='sideMenuClose'
                onClick={()=>setMenuToggled(false)}>
                    <img alt='close' src='https://cdn-icons-png.flaticon.com/128/2997/2997911.png'/>
                </div>
                <div className='sideMenuLinks'>
                    <Link to='/' onClick={()=>setMenuToggled(false)}>
                      <NavigationLinkSide navigationLink={"The Lab"} />
                    </Link>
                    <Link to='/projects' onClick={() => setMenuToggled(false)}>
                      <NavigationLinkSide navigationLink={"Experiments"} />
                    </Link>
                    <Link to='/about' onClick={() => setMenuToggled(false)}>
                      <NavigationLinkSide navigationLink={"The Scientist"} />
                    </Link>
                </div>  
            </div>
          </div>
          ) : null
        }
        </div>
    </nav>
    </>
  )
}

export default Navbar