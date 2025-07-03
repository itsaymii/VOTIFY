import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Discover from './components/Discover';
import CreatePoll from './components/CreatePoll';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/discover" element={<Discover />} /> 
          <Route path="/create-poll" element={<CreatePoll />} />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}

export default App;