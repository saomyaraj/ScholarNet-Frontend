/* eslint-disable no-unused-vars */
import React from 'react';
import './ResearchDiscussion.css';
import RDImage from '../../assets/1.png';

function RDRectangularSection() {
    return (
        <div className='rectangular-section'>
            <div className='rectangular-content'>
                <div className='rectangular-text'>
                    <h2>Engage in Interactive Research Discussion</h2>
                    <p>Join the conversation and collaborate with researchers worldwide. Share your insights, ask questions, and explore new ideas together.</p>
                </div>
                <div className='rectangular-image'>
                    <img src={RDImage} alt="Research Discussion Example" />
                </div>
            </div>
        </div>
    );
};

export default RDRectangularSection;