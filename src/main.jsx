import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import './i18n'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer theme='dark' autoClose={1000}/>
  </StrictMode>,

)
