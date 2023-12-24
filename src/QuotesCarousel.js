import React, { useState, useEffect } from 'react'
import quotes from './quotes.json' // Importing quotes

const QuotesCarousel = ({ interval }) => {
  const [currentQuote, setCurrentQuote] = useState({})

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }

  useEffect(() => {
    setCurrentQuote(getRandomQuote())
    const quoteInterval = setInterval(() => {
      setCurrentQuote(getRandomQuote())
    }, interval)

    return () => clearInterval(quoteInterval)
  }, [interval])

  return (
    <div className="quote-container">
      <p className="quote">{currentQuote.quotes}</p>
      <p className="author">{currentQuote.author}</p>
    </div>
  )
}

export default QuotesCarousel
