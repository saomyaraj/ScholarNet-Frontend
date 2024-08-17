/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import SearchBar from './SearchBar';
import Notifications from './Notifications';
import Messaging from './Messaging';
import Explore from './Explore';
import LogoutButton from './LogoutButton';
import './NavigationBar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/dashboard" className="navbar-brand">ScholarNet</Link>
            <SearchBar />
            <Explore />
            <div className='navbar-icons'>
                <Messaging />
                <Notifications />
                <UserProfile />
                <LogoutButton />
            </div>
        </div>
    );
}

export default Navbar;