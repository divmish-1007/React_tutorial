// import { StrictMode } from 'react'
import React, { StrictMode } from 'react'; // Refering ful React Line 1 relaced by this line 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from "./chai"

function MyApp(){
  return (
    <div>
      <h1>Custom APP ! || chai</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https:/google.com',
//       target: '_blanke'
//   }, 
//   children: 'Click me to visit google'
// }


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href:"https://google.com", target: '_blank'},
  'click on me to Visit Google by YourSelf'
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <>
    <App/>
    </>

  </StrictMode>,

  // reactElement

)
