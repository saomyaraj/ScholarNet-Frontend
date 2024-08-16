/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import './FAQSection.css';
import PropTypes from 'prop-types';

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className='faq-item'>
            <div className='faq-question' onClick={toggleFAQ}>
                <h3>{question}</h3>
                <span className={`faq-icon ${isOpen ? 'open' : ''}`}>
                    {isOpen ? '▼' : '►'}
                </span>
            </div>
            {isOpen && <div className='faq-answer'>{answer}</div>}
        </div>
    );
};

export default function FAQSection() {
    const faqData = [
        {
            question: 'What is ScholarNet?',
            answer: 'ScholarNet is a platform that allows researchers to share their work, collaborate with others, and engage in discussions.'
        },
        {
            question: 'How can I join ScholarNet?',
            answer: 'You can join ScholarNet by creating an account on our website.'
        },
        {
            question: 'Is ScholarNet free to use?',
            answer: 'Yes, ScholarNet is free to use for all registered users.'
        },
        {
            question: 'How can I share my research on ScholarNet?',
            answer: 'You can share your research on ScholarNet by uploading your papers to the platform.'
        }
    ];

    return (
        <div className='faq-section'>
            <h2>Frequently Asked Questions</h2>
            {faqData.map((item, index)=>(
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
}