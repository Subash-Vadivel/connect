import React from 'react'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Resources/components/Home'
import Authentication from './Authentication'
import Request from './Resources/components/Request';

export default function App() {
  return (
    <BrowserRouter>
    <Authentication>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/request" element={<Request/>}>
        
      </Route>
    </Routes>
    </Authentication>
    </BrowserRouter>
  )
}
