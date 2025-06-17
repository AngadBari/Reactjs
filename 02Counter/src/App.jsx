import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5)   //Hooks

  // let counter=5

  const addValue=()=>{
   
     counter=counter+1
    setCounter(counter)  
  
    
  }

  const removeValue=()=>{
    
    counter=counter - 1
    setCounter(counter)
  }

  return (
    <>
    <h1>React With Bari</h1>
    <h2>Counter Value:{counter}</h2>
   
    <button onClick={addValue} disabled={counter == 20}>Add Value</button>
    <br></br>
    <button onClick={removeValue} disabled={counter==0}>Remove Value</button>
    
    </>

    // Task by HC Value==20 (No value Add) and Vlaue == 0(No Value Remove)

  )
}

export default App
