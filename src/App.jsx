import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import ChangeColors from './components/ChangeColor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world!</h1> 

       <Profile/>
       <Login/>

       <ChangeColors/>
    </>
  )
}

export default App
