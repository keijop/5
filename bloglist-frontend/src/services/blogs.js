import axios from 'axios'
const baseUrl = '/api/blogs/'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  const data = response.data
  const sortedData = data.sort((a, b) => b.likes - a.likes)
  return sortedData
}

const postBlog = async body => {
  const config = { headers: { Authorization: token } }
  const response = await axios.post(baseUrl, body, config)
  return response
}

const updateBlog = async (id, body) => {
  const response = await axios.patch(baseUrl + id, body)
  return response
}

export default { getAll, postBlog, updateBlog, setToken }
