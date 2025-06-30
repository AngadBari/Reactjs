import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Componets/Login';
import Profile from './Componets/Profile';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Bari</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App
