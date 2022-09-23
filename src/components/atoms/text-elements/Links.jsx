import React from 'react'

const Links = ({content, linkName, source}) => {
  return (
    <div className="linkContainer">
        {content} <a href={source} target='_blank' rel="noreferrer"> {linkName}</a>
    </div>
  )
}

export default Links