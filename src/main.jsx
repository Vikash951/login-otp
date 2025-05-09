import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Keyboard from './Keyboard.jsx'
import ToDoList from './ToDoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Keyboard /> */}
    <ToDoList />
  </StrictMode>,
)
