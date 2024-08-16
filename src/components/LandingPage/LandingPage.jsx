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
import RDRectangularSection from './ResearchDiscussion';
import TPRectangularSection from './TopPapers';
import CORectangularSection from './Collaboration';
import CPRectangularSection from './CustomProfile';
import FAQSection from './FAQSection';
import NewsletterSignUp from './Newsletter';

const LandingPage = () => {
    return (
        <><div className='landing-page'>
            <Header />
            <div className='landing-content'>
                <h1>Welcome to ScholarNet</h1>
                <p>Your gateway to research and academic networking.</p>
                <p id='motivation'>Use it for discussions just like you do for memes in Reddit or Instagram.</p>
                <button className='explore-button'>&#127760; Explore</button>
            <Link to="" className="about-us">Learn More</Link>
            </div>
            <FramerMotion>
              <FeaturedPapers />
            </FramerMotion>
            <FramerMotion>
              <KeyFeaturesSection />
            </FramerMotion>
            <FramerMotion>
            <RDRectangularSection />
            </FramerMotion>
            <FramerMotion>
            <TPRectangularSection />
            </FramerMotion>
            <FramerMotion>
            <CORectangularSection />
            </FramerMotion>
            <FramerMotion>
            <CPRectangularSection />
            </FramerMotion>
        </div><FAQSection /><NewsletterSignUp /><Footer /></>
            );
        };

export default LandingPage;