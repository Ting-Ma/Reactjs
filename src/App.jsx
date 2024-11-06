import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./card"

function App() {
  const [count, setCount] = useState(0)

const name = "Martin";
const id = 5;

function card(props){
 return( <div>
  <h1>src = {props.src} </h1>
  <h1>name = {props.name} </h1>
  </div>
);}
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h1>Hello,My name is {name}, my id is {Math.floor(Math.random()*10)}</h1>
        <h1>This is my showcase website and it made by node.js and react.js</h1>
        <input></input>

        <Card
          name = "Ting"
          src = ".com"

        />
      </div>
    </>
  )
}

export default App
