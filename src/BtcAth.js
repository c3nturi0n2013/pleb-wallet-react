import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './btcAth.css'; // Import the CSS file for styling

const CACHE_KEY = 'bitcoin_ath';
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

const BtcAth = () => {
  const [ath, setAth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchATH = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');
        const athValue = response.data.market_data.ath.usd;
        
        const cachedData = {
          value: athValue,
          timestamp: Date.now(),
        };
        
        localStorage.setItem(CACHE_KEY, JSON.stringify(cachedData));
        setAth(athValue);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    const loadCachedData = () => {
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        const { value, timestamp } = JSON.parse(cachedData);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setAth(value);
          setLoading(false);
          return true;
        }
      }
      return false;
    };

    if (!loadCachedData()) {
      fetchATH();
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="ath-container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {ath && (
        <div className="ath-display">
          <h2>Bitcoin All-Time High</h2>
          <p>${ath.toLocaleString()}</p>
          <h3><a href="https://www.coingecko.com/" id="gecko">CoinGecko</a></h3>
        </div>
      )}
    </div>
  );
};

export default BtcAth;
