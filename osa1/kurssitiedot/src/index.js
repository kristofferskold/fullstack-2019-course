import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}
const Total = (props) => {
  return (
    <p>yhteensä {props.exercises} tehtävää</p>
  )
}

const Content  = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercise1s} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content
      part1={course.parts[0].name} exercises1={course.parts[0].exercises}
      part2={course.parts[1].name} exercises2={course.parts[1].exercises}
      part3={course.parts[2].name} exercises3={course.parts[2].exercises}
      />
      <Total exercises={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
