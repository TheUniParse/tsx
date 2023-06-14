import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './sass/main.scss'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <h1 className='bg-red-500 p-4 pt-2'>test tailwind</h1>
    <App />
  </React.StrictMode>
)
