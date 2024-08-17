/* eslint-disable no-unused-vars */
import React from 'react';
import './Notifications.css';

function Notifications() {
    return (
        <div className='notifications'>
            <i className='fas fa-bell'></i>
            <span className='notification-count'>3</span>
        </div>
    );
}

export default Notifications;