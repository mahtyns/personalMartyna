import Descriptions from '../../atoms/text-elements/Descriptions'
import TitleMain from '../../atoms/text-elements/TitleMain'
import './combinationsStyles.css'

const ImageLeftText = (props) => {
  return (
    <div className='imgTextCombinationContainer'>
        <div className='imgTextWrapper'>
            <img src={props.imageSource} alt={props.imageAlt}/>
            <div className='textContents'>
                <TitleMain content={props.titleMain} variant={props.titleVariant} />
                <Descriptions content={props.description} variant={props.descrVariant} />
            </div>
        </div>
    </div>
  )
}

export default ImageLeftText