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
                    <input type="text" className='search-bar' placeholder='Search academic papers...'/>
                </div>
                <div className='navbar-right'>
                    <Link to="/login" className="nav-link">Join Discussion</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;