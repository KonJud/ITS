import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserContextProvider } from "./context/userContext/userConstext"
import './index.css'
import {BrowserRouter} from "react-router-dom/cjs/react-router-dom.min"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>  
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
