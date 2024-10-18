import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  const addValue = () =>{

    setCounter(prevCount=>{
    const newcount = prevCount + 1;

      if(newcount > 20 ){
        return 20;
      }
      return newcount;
    });
  }

  // const subValue = () =>{
  //  if(counter>0)
  //   setCounter(counter-1)
  // }

  const subValue = () =>{

    setCounter(prevCount=>{
      const newcount = prevCount - 1;

      if(newcount < 0 ){
        return 0;
      }
      return newcount;
    });
  }


  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br/>
      <button
      onClick={subValue}
      >Subtract Value {counter}</button>
    </>
  )
}

export default App
