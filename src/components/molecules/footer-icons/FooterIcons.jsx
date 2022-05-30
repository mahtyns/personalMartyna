import React from 'react';
import './footerIconsStyles.css'

const FooterIcons = () => {
  return (
    <div className='iconsContainer'>
        <div className='iconSingleItem'>
              <a href='https://www.behance.net/msmolarek' target={'blank'}> 
                  <img alt='Behance' src='https://i.ibb.co/QK10g1y/behance.png'/>
           </a>
        </div>
        <div className='iconSingleItem'>
              <a href='https://github.com/mahtyns' target={'blank'}> 
                  <img alt='Github' src='https://i.ibb.co/TggWBz2/github.png'/>
           </a>
        </div>
        <div className='iconSingleItem'>
              <a href='https://www.linkedin.com/in/msmolarek/' target={'blank'}> 
                  <img alt='LinkedIn' src='https://i.ibb.co/mFKzgh1/linkedin.png'/>
           </a>
        </div>
    </div>
  )
}

export default FooterIcons




