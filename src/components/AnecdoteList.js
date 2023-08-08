import { useDispatch, useSelector } from 'react-redux'

import { incrementVote } from '../reducers/anecdoteReducer'
import {
  changeNotification,
  removeNotification,
} from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <li>
      {anecdote.content}
      <br />
      has {anecdote.votes}
      <button onClick={handleVote}>vote</button>
    </li>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return filter === ''
      ? anecdotes
      : anecdotes.filter((anecdote) =>
          anecdote.content.toLowerCase().includes(filter.toLowerCase())
        )
  })

  const vote = (id) => {
    dispatch(incrementVote(id))
    dispatch(
      changeNotification(
        `You voted "${anecdotes.find((n) => n.id === id).content}"`
      )
    )
    setTimeout(() => {
      dispatch(removeNotification(''))
    }, 5000)
  }
  // dispatch({ type: 'notes/createNote',
  // payload: 'Redux Toolkit is awesome!' })
  return (
    <ul>
      {[...anecdotes] //create a copy of anecdotes for sorting
        .sort((a, b) => b.votes - a.votes) //sort() directly mutates the original array => undesirable behavior
        .map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleVote={() => vote(anecdote.id)}
          />
        ))}
    </ul>
  )
}

export default AnecdoteList
