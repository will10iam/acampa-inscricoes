import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countdown from './pages/Countdown';
import Home from './pages/Home';
import Thanks from './pages/Thanks';

export default function App() {
  return (
    <BrowserRouter>
      <div classname='App'>
        <Routes>
          <Route path="/" element={<Countdown />} />
          <Route path="/register" element={<Home />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}