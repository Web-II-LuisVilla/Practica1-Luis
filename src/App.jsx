import { useState } from 'react'
import './App.css'
import Contador from './Components/Contador'
import Card from './Components/Card'

function App() {

const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Cards</h1>
      <Card count={count}/>
      <h1>Contador</h1>
      <h3>Valor actual: {count}</h3>
      <Contador setCount={setCount} count={count}/>
      </div>
    </>
  )
}

export default App