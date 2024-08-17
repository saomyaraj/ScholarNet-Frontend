/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import './Bookmarks.css';

function BookmarkSection() {
    const papers = [
        { title: "Paper Title 1", author: "Author Name 1" },
        { title: "Paper Title 2", author: "Author Name 2" },
        { title: "Paper Title 3", author: "Author Name 3" },
        { title: "Paper Title 4", author: "Author Name 4" },
        { title: "Paper Title 5", author: "Author Name 5" },
        { title: "Paper Title 6", author: "Author Name 6" },
        { title: "Paper Title 7", author: "Author Name 7" },
        { title: "Paper Title 8", author: "Author Name 8" },
        { title: "Paper Title 9", author: "Author Name 9" },
    ];

    const papersRef = useRef(null);

    const scrollLeft = () => {
        papersRef.current.scrollBy({ left: -220, behavior: 'smooth' });
    };

    const scrollRight = () => {
        papersRef.current.scrollBy({ left: 220, behavior: 'smooth' });
    };

    return (
        <div className='bookmark-section'>
            <h2>Bookmarked Papers</h2>
            <div className='bookmark-container'>
                <button className='arrow left-arrow' onClick={scrollLeft}>{'<'}</button>
                <div className='papers' ref={papersRef}>
                    {papers.map((paper, index) => (
                        <div className='paper-card' key={index}>
                            <h3>{paper.title}</h3>
                            <p>{paper.author}</p>
                            <button className='read-button'>Read</button>
                        </div>
                    ))}
                </div>
                <button className='arrow right-arrow' onClick={scrollRight}>{'>'}</button>
            </div>
        </div>
    );
}

export default BookmarkSection;