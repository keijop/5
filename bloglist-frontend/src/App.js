import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import Message from './components/Message'
import loginService from './services/login'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [message, setMessage] = useState({ text: '', warning: false })

  useEffect(() => {
    blogService.getAll().then(blogs => setBlogs(blogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const displayMessage = (text, warning) => {
    setMessage({ text: text, warning: warning })
    setTimeout(() => {
      setMessage({ text: '', warning: false })
    }, 2000)
  }

  const loginHandler = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username, password })
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      displayMessage('login sucess', false)
    } catch (error) {
      displayMessage(error.response.data.error, true)
    }
  }

  const logoutHandler = event => {
    event.preventDefault()
    window.localStorage.clear()
    setUser('')
  }

  const blogSubmitHandler = async event => {
    event.preventDefault()
    try {
      const response = await blogService.postBlog({ title, url, author })
      displayMessage(
        `${response.data.title} by ${response.data.author} added`,
        false
      )
    } catch (error) {
      displayMessage(error.response.data.error, true)
    }
  }

  if (user === '') {
    return (
      <div>
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          clickHandler={loginHandler}
        />
        <br />
        {message.text && <Message message={message} />}
      </div>
    )
  }
  return (
    <div>
      <h2>blogs</h2>

      {message.text && <Message message={message} />}
      <p>
        <b>{user.name}</b> is logged in
        <button onClick={logoutHandler}>logout</button>
      </p>
      <BlogForm
        submitHandler={blogSubmitHandler}
        author={author}
        title={title}
        url={url}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setUrl={setUrl}
      />
      <br />
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default App