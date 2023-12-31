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
        Bitcoin's price is{' '}
        <span className="btc-price">${price.toLocaleString()}</span>
      </h1>
      <h4>Sup?! 😄</h4>
    </div>
  )
}

export default App
