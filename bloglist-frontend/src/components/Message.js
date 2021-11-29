import React from 'react'

const Message = ({ message }) => {
  return (
    <div>
      <span
        id='message'
        style={
          message.warning
            ? { border: '3px solid red', color: 'red' }
            : { border: '3px solid green', color: 'green' }
        }
      >
        {message.text}
      </span>
    </div>
  )
}

export default Message
