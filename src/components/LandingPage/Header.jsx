/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav className='navbar'>
                <div className='navbar-left'>
                    <Link to="/" className="navbar-brand">ScholarNet</Link>
                </div>
                <div className='navbar-center'>
                    <input type="text" className='search-bar' placeholder='Search any academic paper...'/>
                </div>
                <div className='navbar-right'>
                    <Link to="/register" className="nav-link">Register</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;