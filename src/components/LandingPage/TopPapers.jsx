/* eslint-disable no-unused-vars */
import React from 'react';
import './ResearchDiscussion.css';
import TPImage from '../../assets/2.png';

function TPRectangularSection() {
    return (
        <div className='rectangular-section'>
            <div className='rectangular-content'>
                <div className='rectangular-text'>
                    <h2>Top Papers</h2>
                    <p>Get top papers of your interest and domain directly in your dashboard.</p>
                </div>
                <div className='rectangular-image'>
                    <img src={TPImage} alt="Research Discussion Example" />
                </div>
            </div>
        </div>
    );
};

export default TPRectangularSection;