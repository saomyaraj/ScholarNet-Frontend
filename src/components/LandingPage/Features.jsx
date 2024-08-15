/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './Features.css';

function Features(props) {
    return (
        <div className='feature-card'>
            <h3 className='feature-title'>{props.title}</h3>
            <p className='feature-description'>{props.description}</p>
            {props.link && (
                <a href={props.link} className='feature-link'>Learn more</a>
            )}
        </div>
    );
}

Features.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export function KeyFeaturesSection() {
    return (
        <div className='key-features-section'>
            <h2 className='key-features-heading'>Key Features</h2>
            <div className='key-features-cards'>
                <Features 
                    title="Feature 1" 
                    description="This is the first feature description." 
                    link="https://example.com/feature1" 
                />
                <Features 
                    title="Feature 2" 
                    description="This is the second feature description." 
                    link="https://example.com/feature2" 
                />
                <Features 
                    title="Feature 3" 
                    description="This is the third feature description." 
                    link="https://example.com/feature3" 
                />
            </div>
        </div>
    );
}

export default Features;