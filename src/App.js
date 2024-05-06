import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [price, setPrice] = useState(0);
  const [bitcoinData, setBitcoinData] = useState({ amount: '', percent: '', date: '' });

  const getPrice = () => {
    axios
      .get('https://api.coinbase.com/v2/prices/BTC-USD/spot')
      .then((res) => {
        setPrice(Number(res.data.data.amount));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPrice();
    const interval = setInterval(getPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/c3nturi0n2013/data/master/btc.json')
      .then((res) => {
        const data = res.data[0]; // Assuming data you want is at the first index
        setBitcoinData({
          amount: data.amount,
          percent: data.percent,
          date: data.date,
        });
      })
      .catch((err) => {
        console.log('Error fetching Bitcoin data:', err);
      });
  }, []);

  return (
    <div className="container">
      <h1>
        Bitcoin = <span className="btc-price">${price.toLocaleString()}</span>
      </h1>
      <h2>1 Satoshi (Sat) = ${(price / 100000000).toFixed(8)}</h2>
      <h4>100 million sats = 1 Bitcoin</h4>
      <h4>
        One dollar can buy you {(1 / (price / 100000000)).toFixed(2)} sats
      </h4>
      <h4 id='gizmo'>
        {bitcoinData.percent}% BTC owned as of {bitcoinData.date} with amount ${bitcoinData.amount}
      </h4>
    </div>
  );
}

export default App;
