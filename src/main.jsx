import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import Store from "./Store/dataReader.jsx"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Store>
    <App />
    </Store>
  </StrictMode>,
)
