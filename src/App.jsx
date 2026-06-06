import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import CreateAccount from './CreateAccount';
import Login from './Login';
import Account from './Account';


function App() {
  return (
    <div className=' h-screen w-full flex justify-center items-center'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<CreateAccount/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/account' element={<Account/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
