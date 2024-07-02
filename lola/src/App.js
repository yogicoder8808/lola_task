import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Responsepage from './Pages/Responsepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/response" element={<Responsepage />} />
      </Routes>
    </Router>
  );
}

export default App;

