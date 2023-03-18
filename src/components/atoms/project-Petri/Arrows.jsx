import './projectPetriStyles.css'
import classNames from 'classnames'

const Arrows = (props) => {

  const arrowStyles = classNames('arrowsContainer', {
    'back': props.isBack === true
  })  

  return (
    <div className={arrowStyles} onClick={props.handleOnClick}>
        <img src='https://cdn-icons-png.flaticon.com/512/10081/10081589.png' alt='arrow'/>
    </div>
  )
}

export default Arrows