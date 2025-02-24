import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const Element = () => {
//   return (
//   <h2>
//     hello jsx
//     {1 + 1}
//   </h2>
//   )
// }

createRoot(document.getElementById('root')).render(<App/>)
