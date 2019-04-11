import React from 'react'

const Header = ({name}) => <h1>{name}</h1>

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Total = ({total}) => <p>Yhteensä {total} tehtävää</p>

const Course = ({courses}) => {

    const rows = () => courses.map(course => (
      <div key={course.id}>
      <Header key={course.id} name={course.name} />
      { course.parts.map(part =>
      <Part key={part.id} name={part.name} exercises={part.exercises}/>
        )
      }
    <Total total={ course.parts.reduce((sum, part) =>  sum + part.exercises ,0) } />
      </div>
    ))

    return (
      <>
        {rows()}
      </>
      )
}

export default Course
