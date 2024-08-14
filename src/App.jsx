/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login  from './components/Login/LoginPage.jsx';
import Registration from './components/Login/Registration.jsx'

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      </ Routes>
    </ Router>
  );
}

export default App;