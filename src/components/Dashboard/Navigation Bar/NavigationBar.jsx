/* eslint-disable no-unused-vars */
import React from 'react';
import UserProfile from './UserProfile';
import SearchBar from './SearchBar';
import Notifications from './Notifications';
import Messaging from './Messaging';
import LogoutButton from './LogoutButton';
import './NavigationBar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <UserProfile />
            <SearchBar />
            <Notifications />
            <Messaging />
            <LogoutButton />
        </div>
    );
}

export default Navbar;