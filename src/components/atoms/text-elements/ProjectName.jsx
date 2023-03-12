import './textStyles.css'
import classNames from 'classnames'


const ProjectName = (props) => {

  const titleVariants = classNames('projectNameText', {
    'xs': props.variant === "xs",
    's': props.variant === "s",
    'm': props.variant === "m",
    'l': props.variant === "l"
  })


  return (
    <div className={titleVariants}>
        {props.content}
    </div>
  )
}

export default ProjectName