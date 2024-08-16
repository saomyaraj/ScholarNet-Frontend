/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import Header from './Header';
import Footer from './Footer';
import FeaturedPapers from './FeaturedPapers';
import {KeyFeaturesSection} from './Features';
import FramerMotion from './FramerMotion';



const LandingPage = () => {
    return (
        <div className='landing-page'>
            <Header />
            <div className='landing-content'>
                <h1>Welcome to ScholarNet</h1>
                <p>Your gateway to research and academic networking.</p>
                <p id='motivation'>Use it for discussions just like you do for memes in Reddit or Instagram.</p>
                <button className='explore-button'>Explore</button>
                <Link to="" className="about-us">More About Us</Link>
            </div>
            <FramerMotion children={<FeaturedPapers/>} />
            <FramerMotion children={<KeyFeaturesSection />} />  
            <Footer />
        </div>
    );
}

export default LandingPage;