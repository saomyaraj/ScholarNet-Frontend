/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import './Newsletter.css';

function NewsletterSignUp() {
    const [email, setEmail] = useState('');
    const [frequency, setFrequency] = useState('weekly');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Subscribed ${email} for ${frequency} newsletter!`);
    };

    return (
        <div className='newsletter-section'>
            <div className='newsletter-content'>
                <h2>Subscribe to Our Newsletter</h2>
                <p>Get top papers delivered to your inbox weekly or monthly. Stay updated with the latest research!</p>
                <form className='newsletter-form' onSubmit={handleSubmit}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required className='newsletter-input'/>
                    <select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        className='newsletter-select'
                    >
                        <option value='weekly'>Weekly</option>
                        <option value='monthly'>Monthly</option>
                    </select>
                    <button type='submit' className='newsletter-button'>Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default NewsletterSignUp;