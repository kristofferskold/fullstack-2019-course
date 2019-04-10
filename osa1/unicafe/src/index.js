import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({label, value}) => {
	return (
			<tr><td>{label}</td><td> {value}</td></tr>
		)

}

const Header = ({name}) => <h1>{name}</h1>
const Paragraph = ({name}) => <p>{name}</p>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = props => {
  //const [value, setValue] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalVotes, setTotalVotes] = useState([])

  const text = {
    headers: [
		{
        feedback: 'anna palautetta',
        stats: 'statistiikka'
      }
	],
    texts: [
      {
        good: 'hyvä',
        neutral: 'neutraali',
        bad: 'huono',
				total: 'yhteensä',
				average: 'keskiarvo',
				positive: 'positiivista',
				nostats: 'Ei yhtään palautetta annettu'
      }
    ]
  }

  const setToGood = newGood => {
    setGood(newGood)
	  //setToTotal(total + 1)
	  setTotalVotes(totalVotes.concat(1))
  }

  const setToNeutral = newNeutral => {
	  setNeutral(newNeutral)
	  setTotalVotes(totalVotes.concat(0))
  }

  const setToBad = newBad => {
	  setBad(newBad)
	  setTotalVotes(totalVotes.concat(-1))
  }

  const averageValue = () => {
	 let sum = 0;
	  for (let i=0; i<totalVotes.length; i++) {
        sum += totalVotes[i];
    }
	  if(sum<1) {
		  return 0;
	  }else{
		  return sum/totalVotes.length
	  }
  }

  const positivePercentage = () => {
	 let sum = 0;
	  for (let i=0; i<totalVotes.length; i++) {
        if(totalVotes[i] === 1) {
		  sum += totalVotes[i];
		}
    }
	  if(sum<1) {
		  return 0;
	  }else{
		  return Math.round((sum/totalVotes.length)*100) + ' %'
	  }
  }
	if(totalVotes.length < 1) {
	  return (
	    <div>
		  <Header name={text.headers[0].feedback} />
		  	<Button handleClick={() => setToGood(good + 1)} text="hyvä" />
	      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutraali" />
	      <Button handleClick={() => setToBad(bad + 1)} text="huono" />

		  <Header name={text.headers[0].stats} />
		  <Paragraph name={text.texts[0].nostats} />
		</div>
	  )
	} else {
		return (
	    <div>
		  <Header name={text.headers[0].feedback} />
		  	<Button handleClick={() => setToGood(good + 1)} text="hyvä" />
	      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutraali" />
	      <Button handleClick={() => setToBad(bad + 1)} text="huono" />

		  	<Header name={text.headers[0].stats} />
				<table>
				<tbody>
	      <Statistics label={text.texts[0].good} value={good}/>
	      <Statistics label={text.texts[0].neutral} value={neutral} />
	      <Statistics label={text.texts[0].bad} value={bad} />
	      <Statistics label={text.texts[0].total} value={totalVotes.length} />
	      <Statistics label={text.texts[0].average} value={averageValue()} />
	      <Statistics label={text.texts[0].positive} value={positivePercentage()} />
				</tbody>
			</table>
		</div>
	  )
	}
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
