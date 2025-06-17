import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Crad from './compontes/Crad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=" bg-green-700 p-4 rounded-2xl text-black mb-4 ">
        Tailwind Test
      </h1>
      <Crad name="Angad" text="Chinu" />
      <Crad name="Ayush" text="Tanu"/>
    </>
  );
}

export default App
