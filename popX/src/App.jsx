import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import './App.css'
import Landing from './components/Landing'
import SignupScreen from './components/SignupScreen'
import LoginScreen from './components/LoginScreen'
import Profile from './components/Profile'

function App() {
  return <>
    <BrowserRouter>
      {/* <Landing/> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
