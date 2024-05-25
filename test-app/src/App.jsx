import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Component'
function App() {
  const [count, setCount] = useState(0)
  function increment(){
    setCount(count+1)
  }
  return (
    <>
     <Button onClick={increment} count={count} />
    </>
  )
}

export default App
