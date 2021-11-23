import React from 'react'

const BlogForm = ({
  title,
  author,
  url,
  submitHandler,
  setUrl,
  setTitle,
  setAuthor,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <input
        id='title'
        type='text'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <label htmlFor='title'>title</label>
      <br />
      <input
        id='author'
        type='text'
        value={author}
        onChange={event => setAuthor(event.target.value)}
      />
      <label htmlFor='author'>author</label>
      <br />
      <input
        id='url'
        type='url'
        value={url}
        onChange={event => setUrl(event.target.value)}
      />
      <label htmlFor='url'>url</label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default BlogForm
