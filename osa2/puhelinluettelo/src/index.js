import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const person = [
  {
    id: 1,
    name: 'Paul Wallin',
    nr: '1234 1234'
  },
  {
    id: 2,
    name: 'Jaska Jokunen',
    nr: '4321 4321'
  },
  {
    id: 3,
    name: 'Josku Jakunen',
    nr: '1234 5678'
  }
]


ReactDOM.render(<App person={person}/>, document.getElementById('root'));
