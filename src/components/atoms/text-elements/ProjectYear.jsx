import './textStyles.css'

const ProjectYear = (props) => {
  return (
    <div className='projectYearContainer'>
        <div className='projectYearText'> 
            {props.content}
        </div>
    </div>
  )
}

export default ProjectYear