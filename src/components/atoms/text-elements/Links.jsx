import React from 'react'

const Links = ({content, linkName, source}) => {
  return (
    <div className="linkContainer">
        {content} <a href={source}> {linkName}</a>
    </div>
  )
}

export default Links