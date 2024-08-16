/* eslint-disable no-unused-vars */
import React from 'react';
import './ResearchDiscussion.css';
import ProfileImage from '../../assets/1.png';

function CPRectangularSection() {
    return (
        <div className='rectangular-section'>
            <div className='rectangular-content'>
                <div className='rectangular-text'>
                    <h2>Profile Customization</h2>
                    <p>Showcase academic achievements and publications.</p>
                </div>
                <div className='rectangular-image'>
                    <img src={ProfileImage} alt="Research Discussion Example" />
                </div>
            </div>
        </div>
    );
};

export default CPRectangularSection;