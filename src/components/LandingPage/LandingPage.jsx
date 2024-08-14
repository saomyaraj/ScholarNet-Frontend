/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import Registration from '../Login/Registration.jsx';
import Login from '../Login/LoginPage.jsx';
import Header from './Header';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <Header />
            <div className='landing-content'>
                <h1>Welcome to ScholarNet</h1>
                <p>Your gateway to research and academic networking.</p>
            </div>
        </div>
    );
}

export default LandingPage;