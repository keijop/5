import React, { useState, useImperativeHandle } from 'react'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return { toggleVisibility }
  })

  const togglableStyle = visible ? { display: '' } : { display: 'none' }

  return (
    <div>
      <div style={togglableStyle}>{props.children}</div>
      <button onClick={toggleVisibility}>
        {visible ? 'close' : props.buttonLabel}
      </button>
    </div>
  )
})

export default Togglable
