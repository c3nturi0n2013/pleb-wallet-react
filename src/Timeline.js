import React from 'react';
import './timeline.css';

const Timeline = ({ events }) => {
    return (
        <div className="timeline">
            <h2>Bitcoin News Timeline</h2>
            {events.map((event, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-content">
                        {/* Conditional rendering of link based on presence of url */}
                        {event.url ? (
                            <p>
                                <a href={event.url} target="_blank" rel="noopener noreferrer">
                                    {event.description}
                                </a>
                                | <span className='btc-price'>{event.date}</span>
                            </p>
                        ) : (
                            <p>{event.description} | <span className='btc-price'>{event.date}</span></p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
