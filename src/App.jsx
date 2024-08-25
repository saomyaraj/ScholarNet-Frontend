/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Registration from './components/Login/Registration.jsx'
import Login  from './components/Login/LoginPage.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import LandingPage2 from './components/LandingPage/LandingPage2';
import RegistrationPage2 from './components/Login/RegistrationPage2';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/landingPage" element={<LandingPage2 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegistrationPage2 />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </ Routes>
    </ Router>
  );
}

export default App;