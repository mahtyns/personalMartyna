import './textStyles.css'

const SubheaderMain = (props) => {
  return (
    <div className='subheaderContainer'>
        <div className='subheaderContent'>
            {props.content}
        </div>
    </div>
  )
}

export default SubheaderMain