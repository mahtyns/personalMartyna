import classNames from 'classnames'


const TitleMain = (props) => {

  const titleClasses = classNames('titleContainer', {
    'xs': props.variant === "xs",
    's': props.variant === "s",
    'm': props.variant === "m",
    'l': props.variant === "l"
  })

  return (
    <div className={titleClasses}>
            {props.content}
    </div>
  )
}

export default TitleMain