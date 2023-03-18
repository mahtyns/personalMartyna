import classNames from "classnames"
import './buttonStyles.css'
import PropTypes from 'prop-types'


const Button = (props) => {

  const classesButton = classNames('buttonGeneral', {
    'light': props.variant === 'light',
    'dark': props.variant === 'dark',
  })

  return (
    <>
    <button className={classesButton} >{props.content}</button>
    </>
  ) 
}

Button.propTypes = {
  variant: PropTypes.string,
  content: PropTypes.string
}


export default Button