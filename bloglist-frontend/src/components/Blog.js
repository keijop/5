import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, likeHandler, user, removeHandler }) => {
  Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    likeHandler: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    removeHandler: PropTypes.func.isRequired,
  }

  const [fullView, setFullView] = useState(false)

  const toggleView = () => setFullView(!fullView)

  const blogDetails = () => {
    return (
      <div>
        <span>likes : {blog.likes}</span>
        <button className='likeBtn' onClick={() => likeHandler(blog.id)}>
          like &#128077;
        </button>
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
      &quot;{blog.title}&quot; by {blog.author}
      <button className='detailsTogglerBtn' onClick={toggleView}>
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
