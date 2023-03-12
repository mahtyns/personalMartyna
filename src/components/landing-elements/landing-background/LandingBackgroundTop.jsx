import LandingTitle from '../landing-title/LandingTitle'
import './landingBackgroundStyles.css';
import Button from '../../atoms/button/Button';
import BackgroundLanding from '../../../test/BackgroundLanding';

const LandingBackground = () => {
  return (
    <>
    <div className='landingContents'>
      <div className='landingContainer'>
        <LandingTitle />
      </div>
      <div className='callToAction'>
        <Button variant={'dark'} content={'EXPLORE'}/>
      </div>
    </div>
    <BackgroundLanding />
    </>
  )
}

export default LandingBackground