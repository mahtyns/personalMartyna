import React from 'react';
import "./stackBubbleStyle.css";

const StackBubble = (props) => {
  return (
    <div className='stackBubble'>
        {props.content}
    </div>
  )
}

export default StackBubble