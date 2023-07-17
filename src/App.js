import React from 'react'
import Header from './Resources/components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Resources/components/Home'
import Authentication from './Authentication'

export default function App() {
  return (
    <BrowserRouter>
    <Authentication>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </Authentication>
    </BrowserRouter>
  )
}
