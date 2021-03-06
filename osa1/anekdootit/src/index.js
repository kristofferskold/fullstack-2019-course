import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => <h1>{text}</h1>
const Anecdote = ({anecdote}) => <p>{anecdote}</p>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = (props) => {
const [selected, setSelected] = useState(0)
const [points, setPoints] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
const [maxPoints, setMaxPoints] = useState(0)
console.log(points)

const setToPoints = selected => {

  const copy = [ ...points ]
  copy[selected] += 1
  setPoints(copy)
  setToMaxPoints()

}

console.log(Math.max(...points))

const setToMaxPoints = () => {
    if (points.length === 0) {
        return -1
    }

    let max = points[0],
        maxIndex = 0

    for (let i = 1; i < points.length; i++) {
        if (points[i] > max) {
            maxIndex = i
            max = points[i]
        }
    }
     setMaxPoints(maxIndex)
}

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} />
      <Button handleClick={() => setToPoints(selected)} text="vote" />
      <Button handleClick={() => setSelected([Math.floor(Math.random() * anecdotes.length)])} text="next anecdote" />
      <Header text="Anecdote with most votes" />
      <Anecdote anecdote={anecdotes[maxPoints]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
