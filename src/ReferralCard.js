import React from 'react';
import './referral.css'
import strikeImage from './strike.png'; 

const ReferralCard = () => {
    return (
        <div className="referral-card" onClick={() => window.open('https://invite.strike.me/7POMSO', '_blank')}>
          <img src={strikeImage} alt="Strike Logo" className="card-image"/>
            <div className="card-content">
                <h2>Join Strike Today!</h2>
                <p>Use this referral link to join Strike where you can buy Bitcoin & transfer money using the Strike rails!</p>
            </div>
        </div>
    );
};

export default ReferralCard;
