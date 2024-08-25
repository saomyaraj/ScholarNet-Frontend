import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
// require('dotenv').config()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='449713560540-6u4fa5uc3tm2ccmg7l8gc3n4eapsikph.apps.googleusercontent.com'>
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
