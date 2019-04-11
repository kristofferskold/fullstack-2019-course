import React from 'react'
import ReactDOM from 'react-dom'

const course =
{
  name: 'Half Stack -sovelluskehitys',
  parts: [
    {
      name: 'Reactin perusteet',
      exercises: 10,
      id: 1
    },
    {
      name: 'Tiedonvälitys propseilla',
      exercises: 7,
      id: 2
    },
    {
      name: 'Komponenttien tila',
      exercises: 14,
      id: 3
    },
    {
      name: 'Redux',
      exercises: 7,
      id: 7
    }
  ]
}

const Header = ({name}) => <h1>{name}</h1>

const Part = ({ name, exercises }) => {
  console.log(name)
  return (
    <p>{name} {exercises}</p>
  )
}
const Total = ({total}) => <p>Yhteensä {total} tehtävää</p>

const Content = () => {

  const parts = course.parts;
    const rows = () => parts.map(part => (
      <Part key={part.id} name={part.name} exercises={part.exercises}/>
    ))

    const totalExercises = course.parts.reduce(function(sum, part){
      return sum + part.exercises
    },0)

    return (
      <>
      <Header name={course.name} />
        {rows()}
        <Total text="Harjoituksia yhteensä: " total={totalExercises} />
      </>
      )
}

const App = () => {
  return (
    <div>
    <Content />
    </div>
  )
}

ReactDOM.render(
  <App notes={course} />,
  document.getElementById('root')
)
