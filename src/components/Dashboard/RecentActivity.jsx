/* eslint-disable no-unused-vars */
import React from 'react';
import './RecentActivity.css';

function RecentActivity() {
    const activities = [
        "John Doe published a new paper on AI Ethics.",
        "Jane Smith liked your research on Renewable Energy Forecasting.",
        "Alan Brown started following you.",
        "Dr. Emily Watson commented on your paper 'Deep Learning in Healthcare'.",
        "New discussion started on 'Explainable AI' by Michael Chen.",
        "Your paper 'Graph Convolutional Networks' reached 100 citations.",
    ];

    return (
        <div className="activity-section">
            <h2>Recent Activity</h2>
            <div className="activity-container">
                {activities.map((activity, index) => (
                    <div className="activity-card" key={index}>
                        {activity}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentActivity;