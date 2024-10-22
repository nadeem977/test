import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CreateContext } from './context/CreateContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateContext>
    <App />
    </CreateContext>
  </StrictMode>,
)
