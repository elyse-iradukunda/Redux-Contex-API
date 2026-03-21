
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import ChangeColors from './components/ChangeColor'
import Sub from './components/Sub'
import ProductSearch from './components/Debouncing'


function App() {

  return (
    <>
      <h1>Hello world!</h1> 

       <Profile/>
       <Login/>

       <ChangeColors/>
       <ProductSearch/>

       <Sub/>
    </>
  )
}

export default App
