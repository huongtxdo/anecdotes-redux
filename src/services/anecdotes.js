import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const anecdoteObject = { content, votes: 0 }
  const response = await axios.post(baseUrl, anecdoteObject)
  return response.data
}

const vote = async (id) => {
  const anecdoteToVote = (await axios.get(`${baseUrl}/${id}`)).data
  const votedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }
  const response = await axios.put(`${baseUrl}/${id}`, votedAnecdote)
  // console.log('response.data', response.data)
  return response.data
}

// eslint-disable-next-line
export default { getAll, createNew, vote }
