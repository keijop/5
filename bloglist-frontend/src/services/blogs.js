import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  const data = response.data
  console.log(data)
  return data
}

const postBlog = async body => {
  const config = { headers: { Authorization: token } }
  const response = await axios.post(baseUrl, body, config)
  return response
}

export default { getAll, postBlog, setToken }
