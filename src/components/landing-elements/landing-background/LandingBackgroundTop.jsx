import LandingTitle from '../landing-title/LandingTitle'
import './landingBackgroundStyles.css';
import Button from '../../atoms/button/Button';
import BackgroundLanding from '../../../test/BackgroundLanding';
import SectionHeader from '../../atoms/text-elements/SectionHeader';

const LandingBackground = () => {
  return (
    <>
    <div className='landingContents'>
        <SectionHeader sectionTitle={`Hi, I'm Martyna`} />
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