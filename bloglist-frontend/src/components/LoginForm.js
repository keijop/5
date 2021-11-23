import React from 'react'

export const LoginForm = ({
  username,
  password,
  setUsername,
  setPassword,
  clickHandler,
}) => {
  return (
    <form>
      <label htmlFor='username'>username:</label>
      <input
        id='username'
        type='text'
        name='username'
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      ></input>
      <br />
      <label htmlFor='password'>password:</label>
      <input
        id='password'
        type='password'
        name='password'
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      ></input>
      <br />
      <button onClick={clickHandler}>log in</button>
    </form>
  )
}

export default LoginForm
