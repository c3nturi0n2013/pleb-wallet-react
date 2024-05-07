import React from 'react';
import './timeline.css'

const Timeline = ({ events }) => {
    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div key={index} className="timeline-item">
                    
                    <div className="timeline-content">
                        {/* <h4>{event.title}</h4> */}
                        <p>{event.description} | <span>{event.date}</span></p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
