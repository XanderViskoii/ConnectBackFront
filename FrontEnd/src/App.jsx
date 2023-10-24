import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  return (
    <>
      <h1>Xander Viskoii Full Stack</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke, index) => {
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.title}</p>
          </div>
        })
      }
    </>
  )
}

export default App
