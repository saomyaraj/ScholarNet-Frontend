/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './FeaturedPapers.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://cguqhphvrfcsnaxovdin.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNndXFocGh2cmZjc25heG92ZGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNjQ4NzAsImV4cCI6MjAzOTc0MDg3MH0.EwT4VAtOcP5xu2anfvxDlvnYG87b_qliDo39RKMGyu8");


const papers = [
    { id: 1, title: 'Paper Title 1', image: '/images/paper1.jpg', description: 'Brief description of paper 1' },
    { id: 2, title: 'Paper Title 2', image: '/images/paper2.jpg', description: 'Brief description of paper 2' },
    { id: 3, title: 'Paper Title 3', image: '/images/paper3.jpg', description: 'Brief description of paper 3' },
    { id: 4, title: 'Paper Title 4', image: '/images/paper4.jpg', description: 'Brief description of paper 4' },
    { id: 5, title: 'Paper Title 5', image: '/images/paper5.jpg', description: 'Brief description of paper 5' },
    { id: 6, title: 'Paper Title 6', image: '/images/paper6.jpg', description: 'Brief description of paper 6' },
];

const FeaturedPapers = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <div className="featured-papers">
            <h2>Featured Papers</h2>
            <Slider {...settings}>
                {papers.map((paper) => (
                    <div key={paper.id} className="paper-card">
                        <img src={paper.image} alt={paper.title} />
                        <div className="card-content">
                            <h3>{paper.title}</h3>
                            <p>{paper.description}</p>
                            <a href={`/papers/${paper.id}`} className="read-more">Read More</a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FeaturedPapers;