import React, { useState } from 'react'
const Blog = ({ blog, likeHandler, user, removeHandler }) => {
  const [fullView, setFullView] = useState(false)

  const toggleView = () => setFullView(!fullView)

  const blogDetails = () => {
    return (
      <div>
        <span>likes : {blog.likes}</span>
        <button onClick={() => likeHandler(blog.id)}>like &#128077;</button>
        <br />
        <span>{blog.url}</span>
      </div>
    )
  }

  const blogStyles = {
    border: 'dashed',
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  }

  return (
    <div style={blogStyles}>
      "{blog.title}" by {blog.author}
      <button onClick={toggleView}>
        {fullView ? 'hide details' : 'details'}
      </button>
      {fullView ? blogDetails() : ''}
      <br />
      {user.username === blog.user.username ? (
        <button onClick={() => removeHandler(blog.id)}>remove blog</button>
      ) : (
        ''
      )}
    </div>
  )
}

export default Blog
