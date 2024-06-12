import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
// import Ex from './Ex'
import HomePage from './HomePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
   </Router>
  </React.StrictMode>,
)
