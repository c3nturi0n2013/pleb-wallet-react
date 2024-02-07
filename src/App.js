import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [price, setPrice] = useState(0)

  const getPrice = () => {
    axios
      .get('https://api.coinbase.com/v2/prices/BTC-USD/spot')
      .then((res) => {
        setPrice(Number(res.data.data.amount))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getPrice()
  }, [])

  useEffect(() => {
    // setInterval will run whatever is in the callback function every 5 seconds
    const interval = setInterval(() => {
      getPrice()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
    </div>
  )
}

export default App
