/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Registration from './components/Login/Registration.jsx'
import Login  from './components/Login/LoginPage.jsx';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      </ Routes>
    </ Router>
  );
}

export default App;