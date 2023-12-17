import React, { useState, useEffect } from 'react'

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Cleanup
    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })

  return (
    <div className="countdown">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      <h2>
        Season 2 of
        <a href="https://rogues.studio/" className="tag">
          {' '}
          World of Rogues
        </a>
      </h2>
      <h3>
        Check out their
        <a href="https://discord.gg/rogues" className="tag">
          {' '}
          Discord
        </a>{' '}
        to learn more.
      </h3>
    </div>
  )
}

export default Countdown
