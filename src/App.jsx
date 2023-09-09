import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {procress} from './controler.js'

function App() {
const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let {result1,result2} = procress(input);
    console.log(result1)
    console.log(result2)

  }

  return (
    <>
      <h1>enter your code eiei</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" />
      </form>
      {
        input
      }

    </>
  )

  
}

export default App
