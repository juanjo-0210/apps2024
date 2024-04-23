import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Globalstyle } from './app/GlobalStyle.js'
import UserProvider from './ejercicios/UserProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalstyle />
    <UserProvider >
      <App />
    </UserProvider>
   
  </React.StrictMode>
)
