
const Links = (props) => {
  return (
    <div className="linkContainer">
        {props.content} <a href={props.source} target='_blank' rel="noreferrer"> {props.linkName}</a>
    </div>
  )
}

export default Links