import React, { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
const [ persons, setPersons] = useState(props.person)
const [ newName, setNewName ] = useState('')
const [ newNr, setNewNr ] = useState('')
const [filterContent, setFilterContent] = useState('')

const handleFilterChange = (event) => {
console.log(event.target.value)
  setFilterContent(event.target.value)
}

const showfilter = persons.filter(person => {
    filterContent.toLowerCase()
    return (
      person.name.toLowerCase().match(filterContent)
    )
  }
)

    const rows = () => showfilter.map(person =>
      <Person
        key={person.id}
        name={person.name}
        nr={person.nr}
      />
    )

    const addPerson = (event) => {
      event.preventDefault()
      const personObject = {
        name: newName,
        nr: newNr,
        id: persons.length + 1,
      }
      const names = persons.map(person => person.name)

      if(names.includes(newName)) {
        alert(`${newName} on jo luettelossa`);
      } else if(newName === ''){
        alert(`Lisää ainakin nimi!`);
      } else {
        setPersons(persons.concat(personObject))
        setNewName(newName)
        setNewNr(newNr)
      }
    }
      const PersonForm = () =>
        <form onSubmit={addPerson}>
          <p>
            <label htmlFor="name">nimi </label>
            <input id="name" onChange={handleNameChange}/>
          </p>
            <p>
                <label htmlFor="tel">numero </label>
                <input id="tel" onChange={handleNrChange}/>
            </p>
          <p>
            <button type="submit">lisää</button>
          </p>
        </form>

        const ListForm = () =>
          <form>
            <p>
              <label htmlFor="filter">Rajaa näytettäviä </label> <input id="filter" onChange={handleFilterChange}/>
            </p>
          </form>
        const handleNameChange = (event) => {
          setNewName(event.target.value)
        }
        const handleNrChange = (event) => {
          setNewNr(event.target.value)
        }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
        <ListForm />
      <h3>Lisää uusi</h3>
        <PersonForm />
      <h3>Numerot</h3>
      <ul>
      {rows()}
      </ul>
    </div>
  )

}

export default App
