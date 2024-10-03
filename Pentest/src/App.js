// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Make sure this path is correct
import Login from './components/Login'; // Make sure this path is correct
import Navbar from './components/Navbar'; // Make sure this path is correct
import Cart from './components/Cart';
//import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add other routes here */}
      </Routes>
     
          </Router>
  );
}

export default App;
