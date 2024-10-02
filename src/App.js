import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countdown from './pages/Countdown';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <div classname='App'>
        <Routes>
          <Route path="/" element={<Countdown />} />
          <Route path="/register" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}