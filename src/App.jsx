
import './App.css'
import './index.css'
import Profile from './components/Profile'
import Login from './components/Login'
import ChangeColors from './components/ChangeColor'
import Sub from './components/Sub'
import ProductSearch from './components/Debouncing'
import TestRef from './components/useRef'
import ToggleHome from './Context-Api/ToggleHome.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ToggleAbout from './Context-Api/ToggleAbout.jsx'
import Nav from './Context-Api/Nav.jsx'
import ThemeProvider from './Context-Api/ThemeProvider.jsx'
import Welcome from './features/props/Welcome.jsx'


function App() {

  return (
    <>
      <h1>Hello world!</h1> 

      <Welcome name="Elyse"/>

       {/* <Profile/>
       <Login/>
       <ChangeColors/>
       <ProductSearch/>
       <Sub/>
       <TestRef/>
        */}
        <ThemeProvider>
         <BrowserRouter>
        <Nav /> 
        <Routes>
          <Route path='/' element={<ToggleHome />} />
          <Route path='/about' element={<ToggleAbout />} />
        </Routes>
        </BrowserRouter>
        </ThemeProvider>
    </>
  )
}

export default App
