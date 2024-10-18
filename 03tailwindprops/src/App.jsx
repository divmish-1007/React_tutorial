import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Divakar",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-3xl'>Tailwind Test</h1>
      <Card username="chaiaurcode" btnText = "Buy Now"/>
      <Card username="Divakar" btnText = "Go to Cart"/>
      
    </>
  )
}

export default App