import './textStyles.css';


const SectionHeader = (props) => {
  return (
    <h1 className='sectionHeader'>
        {props.sectionTitle}
    </h1>
  )
}

export default SectionHeader