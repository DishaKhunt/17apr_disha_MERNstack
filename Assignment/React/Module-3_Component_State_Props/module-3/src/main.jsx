import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import App from './App.jsx'
import HomePage from './HomePage'
import './index.css'
import Que1 from './Que-1'
import Que2 from './Que-2'
import Que3 from './Que-3'
import Que4 from './Que-4'
import Que5 from './Que-5'
import Que6 from './Que-6'
import Que7 from './Que-7'
import Que8 from './Que-8'
import Que9 from './Que-9'
import Que10 from './Que-10'
import Que11 from './Que-11'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/que-1" element={<Que1/>}/>
        <Route path="/que-2" element={<Que2/>}/>
        <Route path="/que-3" element={<Que3/>}/> 
        <Route path="/que-4" element={<Que4/>}/>
        <Route path="/que-5" element={<Que5/>}/>
        <Route path="/que-6" element={<Que6/>}/>
        <Route path="/que-7" element={<Que7/>}/>
        <Route path="/que-8" element={<Que8/>}/>
        <Route path="/que-9" element={<Que9/>}/>
        <Route path="/que-10" element={<Que10/>}/>
        <Route path="/que-11" element={<Que11/>}/>
      </Routes>
    </Router>
    {/* <App /> */}

  </React.StrictMode>,
)
