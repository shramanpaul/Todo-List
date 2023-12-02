// Routing.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from '../Body'; // Adjust the import path as needed

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        
        
      </Routes>
    </Router>
  );
}

export default Routing;
