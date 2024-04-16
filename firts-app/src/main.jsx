import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Globalstyle } from './app/GlobalStyle.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>
)
