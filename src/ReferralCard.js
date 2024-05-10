import React from 'react';
import './referral.css'

const ReferralCard = () => {
    return (
        <div className="referral-card" onClick={() => window.open('https://invite.strike.me/7POMSO', '_blank')}>
          <img src="strike-logo.png" alt="Strike Logo" className="card-image"/>
            <div className="card-content">
                <h2>Join Strike Today!</h2>
                <p>Use this referral link to join Strike and start using Bitcoin easily!</p>
            </div>
        </div>
    );
};

export default ReferralCard;
