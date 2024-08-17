/* eslint-disable no-unused-vars */
import React from 'react';
import './Notes.css';

function Notes() {
    const notes = [
        "Understanding GCNs",
        "Attention Mechanism Overview",
        "Deep Learning Basics",
        "Video Anomaly Detection",
        "Graph Theory in ML",
        "Dehazing Techniques",
        "Optimization Strategies",
    ];

    return (
        <div className="notes-section">
            <h2>Notes</h2>
            <div className="notes-container">
                {notes.map((note, index) => (
                    <div className="note-card" key={index}>
                        {note}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notes;