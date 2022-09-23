import './textStyles.css'

const ProjectCategory = ({ content }) => {
    return (
        <div className='projectCategoryContainer'>
            <div className='projectCategoryText'>
                {content}
            </div>
        </div>
    )
}

export default ProjectCategory