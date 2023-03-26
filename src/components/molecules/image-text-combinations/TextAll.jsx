import Descriptions from '../../atoms/text-elements/Descriptions'
import './combinationsStyles.css'

const TextAll = (props) => {
    return (
        <div className='onlyTextContainer'>
            <div className='textContents'>
                <Descriptions content={props.content} variant={'l'}/>
            </div>
        </div>
    )
}

export default TextAll