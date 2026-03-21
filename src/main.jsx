import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import UserReducer from "./features/Users"
import  themeReducer from './features/Theme'
import isSubscribed  from './features/Subscribe.jsx'

const store = configureStore({

  reducer:{
    user: UserReducer,
    theme: themeReducer,
    subscribe:isSubscribed
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>,
)
