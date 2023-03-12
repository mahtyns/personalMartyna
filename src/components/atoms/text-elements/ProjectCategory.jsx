import './textStyles.css'

const ProjectCategory = (props) => {
    return (
        <div className='projectCategoryContainer'>
            <div className='projectCategoryText'>
                {props.content}
            </div>
        </div>
    )
}

export default ProjectCategory