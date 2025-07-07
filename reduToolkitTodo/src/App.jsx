import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodos from './compontes/AddTodos'
import Todos from './compontes/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redex Toolkit</h1>
      <AddTodos />
      <Todos />
    </>
  );
}

export default App