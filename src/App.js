import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Resources/components/Home'
import Authentication from './Authentication'
import Request from './Resources/components/Request';
import Donate from './Resources/components/Donate';
import Header from './Resources/components/Header';
import Footer from './Resources/components/Footer';
import Transaction from './Resources/components/Transaction';

export default function App() {
  return (
    <BrowserRouter>
    <Authentication>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/request" element={<Request/>}>
      </Route>
      <Route  path="/donate" element={<Donate/>}/>
      <Route path="/transactions" element={<Transaction/>}/>
      
    </Routes>
    </Authentication>
    </BrowserRouter>
  )
}
