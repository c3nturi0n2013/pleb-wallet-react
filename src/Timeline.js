import React from 'react';
import './timeline.css'

const Timeline = ({ events }) => {
    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-date">{event.date}</div>
                    <div className="timeline-content">
                        {/* <h4>{event.title}</h4> */}
                        <p>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
